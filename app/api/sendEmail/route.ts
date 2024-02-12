import { Poruka, porukaSchema } from "@/lib/types"
import { NextRequest } from "next/server"
import { Resend } from "resend"

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
      success: "Poruka je uspesno poslana!",
    }
  }

  const result = await sendEmail(body)
  return new Response(JSON.stringify(result))
}
