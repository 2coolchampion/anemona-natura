import { z } from "zod"

export const porukaSchema = z.object({
  ime: z
    .string()
    .trim()
    .max(100, {
      message: "Name cannot be longer than 100 characters!",
    })
    .optional(),
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Please enter a valid email address." }),
  tel: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined ||
        val === "" ||
        /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(val),
      {
        message: "Please enter a valid phone number.",
      }
    ),
  poruka: z.string().min(1, { message: "Message is required!" }),
})

export type Poruka = z.infer<typeof porukaSchema>
