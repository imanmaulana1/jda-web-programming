import { z } from "zod/v4";

const AuthSchema = z.strictObject({
  email: z.email({
    error: (issue) =>
      issue.input === undefined ? "Email is required" : "Invalid email format",
  }),
  password: z
    .string({ error: "Password is required" })
    .min(6, { error: "Password must be at least 6 characters long" }),
  confirmPassword: z
    .string({ error: "Confirm Password is required" })
    .min(6, { error: "Confirm Password must be at least 6 characters long" }),
});

export const RegisterSchema = AuthSchema.extend({
  fullName: z
    .string({ error: "Full Name is required" })
    .trim()
    .min(3, { error: "Full Name must be at least 3 characters long" })
    .max(50, { error: "Full Name must not exceed 50 characters" })
    .transform((name) => name.trim()),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don’t match",
  path: ["confirmPassword"],
});

export const LoginSchema = AuthSchema.pick({ email: true, password: true });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
