import { Poruka, porukaSchema } from "@/lib/types"
import { NextRequest } from "next/server"
import { Resend } from "resend"
import InitialMessage from "@/emails/initialMessage"
import messageReceivedConfirmation from "@/emails/messageReceivedConfirmation"

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

    try {
      const responseData = await resend.emails.send({
        from: "Anemona Natura d.o.o.<kontakt@anemona-natura.hr>",
        to: "franvidicek@gmail.com",
        subject: ime
          ? `📬 Nova poruka - ${ime} - ${tel}`
          : `📬 Nova poruka - ${email} - ${tel}`,
        reply_to: email as string,
        react: InitialMessage({
          ime: ime,
          email: email,
          tel: tel,
          poruka: porukaWithLineBreaks,
        }),
      })
      setTimeout(async () => {
        if (responseData.data) {
          const emailData = await resend.emails.get(responseData.data.id)
          if (emailData.data) {
            if (emailData.data.last_event === "delivered") {
              // send a confirmation email
              const confirmationData = await resend.emails.send({
                from: "Anemona Natura d.o.o.<noreply@anemona-natura.hr>",
                to: email,
                subject: "✅ Primili smo vašu poruku! - Anemona Natura d.o.o.",
                react: messageReceivedConfirmation({
                  poruka: porukaWithLineBreaks,
                }),
              })
              console.log(
                "Confirmation email sent with this id: ",
                confirmationData
              )
            }
          }
        }
      }, 5000)

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
