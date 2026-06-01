import { Poruka, porukaSchema } from "@/lib/types"
import { NextRequest } from "next/server"
import { Resend } from "resend"
import InitialMessage from "@/emails/initialMessage"
// import messageReceivedConfirmation from "@/emails/messageReceivedConfirmation"

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
        error: "Poruka je obavezna!",
      }
    }

    try {
      console.log("Attempting to send email via Resend to:", process.env.CONTACT_RECIPIENT_EMAIL || "franvidicek@gmail.com")
      const { data, error } = await resend.emails.send({
        from: "Anemona Natura d.o.o.<kontakt@anemona-natura.hr>",
        to: process.env.CONTACT_RECIPIENT_EMAIL || "franvidicek@gmail.com",
        subject: ime ? `📬 Nova poruka - ${ime}` : `📬 Nova poruka - ${email}`,
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
      return {
        success: "Poruka je uspješno poslana!",
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
