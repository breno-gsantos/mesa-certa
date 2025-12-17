import { eq } from "drizzle-orm";
import { db } from "..";
import { users } from "../schema";
import { InsertUser } from "@/types";

export async function getUserByEmail(email: string){
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return result[0] || null;
}

export async function createUser(values: InsertUser){
    const newUser = await db.insert(users).values(values).returning();
    return newUser;
}

export async function getUserById(id: number){
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0] || null;
}