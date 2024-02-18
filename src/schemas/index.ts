import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(3, {
    message: "Password must be atleast 3 characters",
  }),
});

export const RegisterSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const userNameSchema = z.object({
  name: z.string().min(3).max(32),
})