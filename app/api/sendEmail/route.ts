import { Poruka, porukaSchema } from "@/lib/types"
import { NextRequest } from "next/server"
import { Resend } from "resend"
import InitialMessage from "@/emails/initialMessage"

export async function POST(req: NextRequest) {
  const body = await req.json()

  const resend = new Resend(process.env.RESEND_API_KEY)

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

    // TODO: Check if email is sucesfully sent and then send a messageReceivedConfirmation Email
    // TODO: The {ime} is not required so make sure you take into account that subject might not have it so there needs to be dynamic subject line
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: "franvidicek@gmail.com",
        subject: `📬 Nova poruka - ${ime} - ${tel}`,
        reply_to: email as string,
        react: InitialMessage({
          ime: ime,
          email: email,
          tel: tel,
          poruka: porukaWithLineBreaks,
        }),
      })

      return {
        success: "Poruka je uspješno poslana!",
      }
    } catch (error) {
      console.log(error)
      return {
        error: "Došlo je do greške prilikom slanja poruke!",
      }
    }
  }

  const result = await sendEmail(body)
  return new Response(JSON.stringify(result))
}
