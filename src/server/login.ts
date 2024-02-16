"use server";
import { LoginSchema } from "@/schemas";
import { z } from "zod";

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
