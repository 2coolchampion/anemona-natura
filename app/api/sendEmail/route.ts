// [DEMO] - Disable the production Resend route for this demo deployment.
// The original imports and implementation remain below for reference only.
export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return new Response(
    JSON.stringify({
      success:
        "This is a demo website — the email wasn't actually sent, but let's pretend it was.",
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  )
}

/*
[DEMO] - Production email implementation disabled above. Keep this code here
for reference when demonstrating or restoring the real Resend integration.

import { Poruka, porukaSchema } from "@/lib/types"
import { NextRequest } from "next/server"
import { Resend } from "resend"
import InitialMessage from "@/emails/initialMessage"
import MessageReceivedConfirmation from "@/emails/messageReceivedConfirmation"

export async function POST(req: NextRequest) {
  const body = await req.json()

  const resend = new Resend(process.env.RESEND_API_KEY || process.env.RESEND_API)

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
    const porukaWithLineBreaks = porukaTyped.poruka.replace(/\n/g, "<br>")

    const email = porukaTyped.email
    const ime = porukaTyped.ime
    const tel = porukaTyped.tel
    const poruka = porukaTyped.poruka

    if (!poruka || poruka.trim() === "") {
      return {
        error: "Message is required!",
      }
    }

    try {
      console.log("Attempting to send email via Resend to:", process.env.CONTACT_RECIPIENT_EMAIL || "your-email@example.com")
      const { data, error } = await resend.emails.send({
        from: "Anemona Natura d.o.o.<kontakt@anemona-natura.hr>",
        to: process.env.CONTACT_RECIPIENT_EMAIL || "your-email@example.com",
        subject: ime ? `📬 New message - ${ime}` : `📬 New message - ${email}`,
        reply_to: email as string,
        react: InitialMessage({
          ime: ime,
          email: email,
          tel: tel,
          poruka: porukaWithLineBreaks,
        }),
      })

      if (error) {
        console.error("Resend API Error details:", error)
        return {
          error: `Resend API Error: ${error.message} (${error.name})`,
        }
      }

      console.log("Email sent successfully. ID:", data?.id)

      // Send confirmation email to the visitor
      try {
        console.log("Attempting to send confirmation email to visitor:", email)
        const { error: confirmationError } = await resend.emails.send({
          from: "Anemona Natura d.o.o.<kontakt@anemona-natura.hr>",
          to: email,
          reply_to: process.env.CONTACT_RECIPIENT_EMAIL || "your-email@example.com",
          subject: "We have received your enquiry - Anemona Natura d.o.o.",
          react: MessageReceivedConfirmation({
            ime: ime,
            email: email,
            tel: tel,
            poruka: porukaWithLineBreaks,
          }),
        })

        if (confirmationError) {
          console.error("Failed to send visitor confirmation email:", confirmationError)
        } else {
          console.log("Visitor confirmation email sent successfully.")
        }
      } catch (confirmEx) {
        console.error("Exception thrown when sending visitor confirmation:", confirmEx)
      }

      return {
        success: `Your message was sent successfully! We have sent a confirmation to ${email}. If you don't see it, please check your spam folder.`,
      }
    } catch (error: any) {
      console.error("Exception caught in sendEmail route handler:", error)
      return {
        error: `Exception: ${error?.message || error}`,
      }
    }
  }

  const result = await sendEmail(body)
  return new Response(JSON.stringify(result))
}
*/
