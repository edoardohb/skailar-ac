import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"
import { db } from "@/server"
import { exeFiles } from "@/server/schema"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { userId, name, clientName } = body

    if (!userId || !name || !clientName) {
      return NextResponse.json(
        { error: "All required fields must be provided." },
        { status: 400 }
      )
    }

    await db.insert(exeFiles).values({
      id: uuidv4(),
      userId,
      name,
      clientName,
    })

    return NextResponse.json({ success: true, message: "File uploaded successfully." })
  } catch (error) {
    console.error("Error adding exe record:", error)
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    )
  }
}