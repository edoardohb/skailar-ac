"use server"

import { db } from "@/server";
import { accounts, users } from "@/server/schema";
import { eq } from "drizzle-orm";

export async function getAllUsers() {
  const allUsers = await db.select().from(users);
  return allUsers;
}

export async function getUserByUsername(username: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.name, username))
    .limit(1)
    .then((result) => result[0] || null);

  return user;
}

export async function getUserById(id: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1)
    .then((result) => result[0] || null);

  return user;
}

export async function getUserByAccountId(accountId: string) {
  const userId = await db
    .select({ userId: accounts.userId })
    .from(accounts)
    .where(eq(accounts.userId, accountId))
    .limit(1)
    .then((result) => result[0]?.userId || null);

  if (!userId) {
    return null;
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1)
    .then((result) => result[0] || null);

  return user;
}