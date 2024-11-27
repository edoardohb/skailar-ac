"use server";

import { db } from "@/server";
import { desc, eq } from "drizzle-orm";
import { bans } from "../schema";

export async function getAllBans() {
  const allBans = await db.select().from(bans);
  return allBans;
}

export async function getBanByUserId(userId: string) {
  const ban = await db
    .select()
    .from(bans)
    .where(eq(bans.userId, userId))
    .orderBy(desc(bans.created_at))
    .limit(1)
    .then((result) => result[0] || null);

  return ban;
}