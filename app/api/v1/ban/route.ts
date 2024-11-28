import { db } from "@/server";
import { getUserByAccountId } from "@/server/actions/get-users";
import { bans } from "@/server/schema";
import crypto from "crypto";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, reason, expiresAt, isAppealable } = body;

    const idToBan = await getUserByAccountId(userId);

    if (!userId) {
      return NextResponse.json({ error: "userId is required." }, { status: 400 });
    }

    const accountExists = await getUserByAccountId(userId);
    if (!accountExists) {
      return NextResponse.json(
        { error: "User not registered on Skailar." },
        { status: 404 }
      );
    }

    const expiresAtDate = new Date(expiresAt);
    if (isNaN(expiresAtDate.getTime())) {
      return NextResponse.json({ error: "Invalid expiresAt format." }, { status: 400 });
    }

    await db.insert(bans).values({
      id: crypto.randomUUID(),
      userId: idToBan?.id ?? '',
      created_at: new Date(),
      expires_at: expiresAtDate,
      reason,
      isAppealable,
    });

    return NextResponse.json({ message: "User successfully banned." });
  } catch (error) {
    console.error("Failed ban user:", error);
    return NextResponse.json({ error: "Failed to ban user." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { banId } = body;

    if (!banId) {
      return NextResponse.json({ error: "banId is required." }, { status: 400 });
    }

    const banExists = await db
      .select()
      .from(bans)
      .where(eq(bans.id, banId))
      .limit(1);

    if (banExists.length === 0) {
      return NextResponse.json({ error: "Ban not found." }, { status: 404 });
    }

    await db
      .delete(bans)
      .where(eq(bans.id, banId));

    return NextResponse.json({ message: "Ban successfully deleted." });
  } catch (error) {
    console.error("Failed to delete ban:", error);
    return NextResponse.json({ error: "Failed to delete ban." }, { status: 500 });
  }
}