"use server"

import { signIn } from "@/server/auth";

export default async function discordLogin() {
  await signIn("discord");
}