import { z } from "zod"

export const porukaSchema = z.object({
  ime: z
    .string()
    .trim()
    .max(100, {
      message: "Ime ne moze biti duže od 100 karaktera!",
    })
    .optional(),
  email: z
    .string()
    .min(1, { message: "Email je obavezan!" })
    .email({ message: "Unesite validnu email adresu" }),
  tel: z
    .string()
    .refine((val) => /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(val), {
      message: "Unesite validan broj telefona",
    })
    .optional(),
  poruka: z.string().min(1, { message: "Poruka je obavezna!" }),
})

export type Poruka = z.infer<typeof porukaSchema>
