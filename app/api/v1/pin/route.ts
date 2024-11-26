import { db } from "@/server";
import { getAccountByUserId } from "@/server/actions/get-accounts";
import { auth } from "@/server/auth";
import { accounts, pins } from "@/server/schema";
import crypto from "crypto";
import { and, desc, eq, lt } from "drizzle-orm";
import { NextResponse } from "next/server";

function generatePin() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const buffer = crypto.randomBytes(9);

  return Array.from(buffer)
    .map(byte => chars[byte % chars.length])
    .slice(0, 6)
    .join('');
}

async function verifyAccount(userId: string) {
  const account = await db
    .select()
    .from(accounts)
    .where(eq(accounts.providerAccountId, userId))
    .limit(1);
  return account.length > 0;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json({ error: "userId is required." }, { status: 400 });
    }

    const accountExists = await verifyAccount(userId);
    if (!accountExists) {
      return NextResponse.json(
        { error: "User not registered on Skailar." },
        { status: 404 }
      );
    }

    const lastPin = await db
      .select()
      .from(pins)
      .where(eq(pins.userId, userId))
      .orderBy(desc(pins.created_at))
      .limit(1);

    const now = new Date();
    const lastCreatedAt = lastPin.length > 0 ? lastPin[0].created_at : null;

    if (lastCreatedAt && (now.getTime() - new Date(lastCreatedAt).getTime()) < 30000) {
      return NextResponse.json(
        { error: "You can only create a pin once every 30 seconds." },
        { status: 429 }
      );
    }

    const pin = generatePin();
    const link = `https://skailar.ac/pin/result/${pin}`;

    await db.insert(pins).values({
      id: crypto.randomUUID(),
      pin,
      isUsed: false,
      result: "None",
      link,
      userId,
      created_at: new Date(),
      used_at: null,
    });

    return NextResponse.json({ message: "Pin created successfully.", pin });
  } catch (error) {
    console.error("Failed to create pin:", error);
    return NextResponse.json({ error: "Failed to create pin." }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const session = await auth();
    const loggedUserId = session?.user?.id;

    if (!loggedUserId) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const loggedDiscordUserId = await getAccountByUserId(loggedUserId ?? '');
    if (!loggedDiscordUserId) {
      return NextResponse.json({ error: "User not registered on Skailar." }, { status: 404 });
    }

    if (userId !== loggedDiscordUserId?.providerAccountId) {
      return NextResponse.json(
        { error: "Invalid userId: you can only access your own pins." },
        { status: 403 }
      );
    }

    if (!userId) {
      return NextResponse.json({ error: "userId is required." }, { status: 400 });
    }

    const accountExists = await verifyAccount(userId);
    if (!accountExists) {
      return NextResponse.json(
        { error: "User not registered on Skailar." },
        { status: 404 }
      );
    }

    const userPins = await db
      .select()
      .from(pins)
      .where(eq(pins.userId, userId));

    return NextResponse.json(userPins);
  } catch (error) {
    console.error("Failed to fetch pins:", error);
    return NextResponse.json({ error: "Failed to fetch pins." }, { status: 500 });
  }
}