"use server"

import { db } from "@/server";
import { users } from "@/server/schema";
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