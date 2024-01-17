import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async (formData: FormData) => {
  const email = formData.get("email")
  const ime = formData.get("ime")
  const kontaktTel = formData.get("kontaktTel")
  const poruka = formData.get("poruka")

  if (!poruka) {
    return {
      error: "Poruka je obavezna!",
    }
  }

  const data = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "franvidicek@gmail.com",
    subject: `📬 Nova poruka - ${ime} - ${kontaktTel}`,
    reply_to: email as string,
    text: `Poruka: ${poruka} || Email: ${email}`,
  })

  console.log(formData)
}

export default sendEmail
