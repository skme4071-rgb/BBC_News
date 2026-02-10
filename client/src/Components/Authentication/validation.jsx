import { z } from "zod";

/* ================= Register Schema ================= */
export const registerSchema = z.object({
  firstName: z.string().min(3, "First name required"),
  lastName: z.string().min(3, "Last name required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms & Privacy Policy" }),
  }),
});

/* ================= Signin Schema ================= */
export const signinSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(0, "Password must be at least 6 characters"),
});
