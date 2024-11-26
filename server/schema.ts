import {
  boolean,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import type { AdapterAccount } from '@auth/core/adapters';
import { sql } from "drizzle-orm";

export const users = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  discordId: text('discordId').unique(),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  })
)

export const pins = pgTable(
  "pin",
  {
    id: text("id").notNull().primaryKey(),
    pin: text("pin").notNull(),
    isUsed: boolean("isUsed").notNull(),
    result: text("result").default("None"),
    link: text("link").notNull(),
    userId: text("userId")
      .notNull()
      .references(() => users.discordId, { onDelete: "cascade" }),
    created_at: timestamp("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    used_at: timestamp("used_at"),
  }
);

export const results = pgTable(
  'result',
  {
    id: text('id').notNull().primaryKey(),
    pinId: text('pinId')
      .notNull()
      .references(() => pins.id, { onDelete: 'cascade' }),
    date: timestamp('date', { mode: 'date' })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  }
);
