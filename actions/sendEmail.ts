"use server"

import { Poruka, porukaSchema } from "@/lib/types"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// This is never used in the actual code because it's a server-side function and at the time I didn't manage to make it work with netlify.

const sendEmail = async (porukaData: unknown) => {
  // server-side validation
  const result = porukaSchema.safeParse(porukaData)
  if (!result.success) {
    //output error message
    let errorMessage = ""
    result.error.issues.forEach((issue) => {
      errorMessage += `${issue.path}: ${issue.message}.\n`
    })

    return {
      error: errorMessage,
    }
  }

  const porukaTyped = porukaData as Poruka

  const email = porukaTyped.email
  const ime = porukaTyped.ime
  const tel = porukaTyped.tel
  const poruka = porukaTyped.poruka

  if (!poruka || poruka.trim() === "") {
    return {
      error: "Poruka je obavezna!",
    }
  }

  const data = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "franvidicek@gmail.com",
    subject: `📬 Nova poruka - ${ime} - ${tel}`,
    reply_to: email as string,
    text: `Poruka: ${poruka} || Email: ${email}`,
  })

  return {
    sucess: "Poruka je uspesno poslana!",
  }
}

export default sendEmail
