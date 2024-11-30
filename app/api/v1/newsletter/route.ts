import { db } from "@/server";
import { newsletter } from "@/server/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.ip || '127.0.0.1';

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    if (!ip) {
      return NextResponse.json(
        { error: "Internal error." },
        { status: 500 }
      );
    }

    const existingEmail = await db.query.newsletter.findFirst({
      where: eq(newsletter.email, email),
    });

    if (existingEmail) {
      return NextResponse.json(
        { success: true, message: "Email already exists in newsletter." },
        { status: 200 }
      );
    }

    const alreadySubscribed = await db.query.newsletter.findFirst({
      where: eq(newsletter.ip, ip),
    });

    if (alreadySubscribed) {
      return NextResponse.json(
        { success: true, message: "Email already exists in newsletter." },
        { status: 200 }
      );
    }

    await db.insert(newsletter).values({
      id: uuidv4(),
      ip,
      email,
    });

    return NextResponse.json(
      { success: true, message: "Email added to newsletter successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding email to newsletter:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
