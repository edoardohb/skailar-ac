"use server"

import { db } from "@/server";
import { exeFiles } from "@/server/schema";
import { eq } from "drizzle-orm";

export async function getAllExes() {
  const allExes = await db.select().from(exeFiles);
  return allExes;
}

export async function getExeById(id: string) {
  const pin = await db
    .select()
    .from(exeFiles)
    .where(eq(exeFiles.id, id))
    .limit(1)
    .then((result) => result[0] || null);

  return pin;
}

export async function getExeByUserId(userId: string) {
  const exes = await db
    .select()
    .from(exeFiles)
    .where(eq(exeFiles.userId, userId))
    .then((result) => result || null);

  return exes;
}
