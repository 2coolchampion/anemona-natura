"use server"

import { Poruka, porukaSchema } from "@/lib/types"

// [DEMO] - The Resend import and client are kept in the disabled flow below
// for reference, but this unused server action must not send email in the demo.
// import { Resend } from "resend"
// const resend = new Resend(process.env.RESEND_API_KEY)

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
      error: "Message is required!",
    }
  }

  // [DEMO] - Disable the real Resend invocation. It is retained as comments
  // so the production implementation can still be demonstrated or restored.
  /*
  const data = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "your-email@example.com",
    subject: `📬 New message - ${ime} - ${tel}`,
    reply_to: email as string,
    text: `Message: ${poruka} || Email: ${email}`,
  })
  */

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return {
    success:
      "This is a demo website — the email wasn't actually sent, but let's pretend it was.",
  }
}

export default sendEmail
