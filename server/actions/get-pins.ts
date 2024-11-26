"use server"

import { db } from "@/server";
import { pins } from "@/server/schema";
import { eq } from "drizzle-orm";

export async function getAllPins() {
  const allPins = await db.select().from(pins);
  return allPins;
}

export async function getPinByPin(pin: string) {
  const completePin = await db
    .select()
    .from(pins)
    .where(eq(pins.pin, pin))
    .limit(1)
    .then((result) => result[0] || null);

  return completePin;
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