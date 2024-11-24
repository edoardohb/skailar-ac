"use server"

import { db } from "@/server";

export async function getAllUsers() {
  const allUsers = await db.user.findMany();
  return allUsers;
}

export async function getUserByUsername(username: string) {
  const user = await db.user.findFirst({
    where: {
      name: username,
    },
  });

  return user;
}