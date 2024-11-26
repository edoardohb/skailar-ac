import { db } from "@/server";
import { pins } from "@/server/schema";
import crypto from "crypto";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

function generatePin() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from({ length: 6 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json({ error: "userId is required" }, { status: 400 });
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

    return NextResponse.json({ message: "Pin created successfully", pin });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create pin" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "userId is required" }, { status: 400 });
    }

    const userPins = await db
      .select()
      .from(pins)
      .where(eq(pins.userId, userId));

    return NextResponse.json(userPins);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch pins" }, { status: 500 });
  }
}