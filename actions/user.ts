'use server'

import { createUser, getUserByEmail } from "@/db/queries/user";
import { registerSchema } from "@/schemas"
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export default async function registerAction(values: unknown){
    const validatedFields = registerSchema.safeParse(values);

    if(validatedFields.error){
        return {success: false, error: validatedFields.error.flatten().fieldErrors}
    };

    const {name, email, password} = validatedFields.data;

    const user = await getUserByEmail(email);

    if(user){
        return {success: false, error: 'Email já cadastrado'}
    }

    const hashed = await bcrypt.hash(password, 10);
    await createUser({
        name, 
        email, 
        password: hashed
    });
}