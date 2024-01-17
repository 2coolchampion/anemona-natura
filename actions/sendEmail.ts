import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async (formData: any) => {
  const data = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "franvidicek@gmail.com",
    subject: `📬 Nova poruka - ${formData.ime}`,
    text: "Hello World!",
  })

  console.log(formData)
}

export default sendEmail
