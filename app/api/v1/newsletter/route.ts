import { db } from "@/server"
import { newsletter } from "@/server/schema"
import { NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { email } = body

    const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]

    if (!email || !ip) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      )
    }

    await db.insert(newsletter).values({
      id: uuidv4(),
      ip,
      email,
    })

    return NextResponse.json({ success: true, message: "Email added to newsletter successfully." })
  } catch (error) {
    console.error("Error adding email to newsletter:", error)
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    )
  }
}
