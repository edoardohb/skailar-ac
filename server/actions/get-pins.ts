"use server"

import { db } from "@/server";
import { pins } from "@/server/schema";
import { eq } from "drizzle-orm";

export async function getAllPins() {
  const allPins = await db.select().from(pins);
  return allPins;
}

export async function getPinById(id: string) {
  const pin = await db
    .select()
    .from(pins)
    .where(eq(pins.id, id))
    .limit(1)
    .then((result) => result[0] || null);

  return pin;
}

export async function getPinByDiscordId(discordId: string) {
  const completePin = await db
    .select()
    .from(pins)
    .where(eq(pins.userId, discordId))
    .limit(1)
    .then((result) => result[0] || null);

  return completePin;
}
