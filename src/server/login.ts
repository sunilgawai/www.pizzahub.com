"use server";
import { db } from "@/lib/db";
import { LoginSchema, RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";

export const login = (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  return {
    success: validatedFields.success,
    data: validatedFields.data,
  };
};

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  console.log("register user data", values);
  const hashedPassword = await bcrypt.hash(values.password, 10)
  const result = await db.user.create({
    data: {
      ...values,
      password: hashedPassword
    }
  })

  return result;
}