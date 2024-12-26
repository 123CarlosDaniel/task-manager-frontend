import { z } from "zod"

export const authSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(2).email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, {
      message: "Password is required",
    })
    .min(8, {
      message: "Password must be greater than 8 characters",
    })
    .max(32, {
      message: "Password must be less than 32 characters",
    }),
})


export const taskSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .max(64, {
      message: "Title must be less than 64 characters",
    }),
  description: z
    .string({ required_error: "Description is required" }),
  state: z
    .number({ required_error: "State is required" })
    .default(0),
})