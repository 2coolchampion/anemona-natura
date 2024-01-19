import { z } from "zod"

export const porukaSchema = z.object({
  ime: z
    .string()
    .trim()
    .min(1, {
      message: "Ime je obavezno",
    })
    .max(100, {
      message: "Ime ne moze biti duže od 100 karaktera",
    }),
  kontaktTel: z.number().optional(),
  email: z.string().email(),
  poruka: z.string(),
})

export type Poruka = z.infer<typeof porukaSchema>
