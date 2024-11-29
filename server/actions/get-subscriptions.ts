"use server"

import { db } from "@/server";
import { pins, subscriptions } from "@/server/schema";
import { eq } from "drizzle-orm";

export async function getAllSubscriptions() {
  const allSubscriptions = await db.select().from(subscriptions);
  return allSubscriptions;
}

export async function getSubscriptionById(id: string) {
  const subscription = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.id, id))
    .limit(1)
    .then((result) => result[0] || null);

  return subscription;
}

export async function getSubscriptionByUserId(userId: string) {
  const completeSubscription = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId))
    .limit(1)
    .then((result) => result[0] || null);

  return completeSubscription;
}
