"use server"

import { db } from "@/server";
import { accounts } from "@/server/schema";
import { eq } from "drizzle-orm";

export async function getAllAccounts() {
  const allAccounts = await db.select().from(accounts);
  return allAccounts;
}

export async function getAccountByUserId(userId: string) {
  const account = await db
    .select()
    .from(accounts)
    .where(eq(accounts.userId, userId))
    .limit(1)
    .then((result) => result[0] || null);

  return account;
}