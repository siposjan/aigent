import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  company: text("company"),
  message: text("message"),
  joinedAt: timestamp("joined_at").defaultNow(),
});

export const insertWaitlistSchema = createInsertSchema(waitlist)
  .pick({
    email: true,
    name: true,
    company: true,
    message: true,
  })
  .extend({
    email: z.string().email("Zadajte platný email"),
    name: z.string().min(2, "Meno musí mať aspoň 2 znaky"),
    company: z.string().optional(),
    message: z.string().optional(),
  });

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = typeof waitlist.$inferSelect;