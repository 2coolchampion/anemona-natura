"use client"

import { SendIcon } from "/public/icons/index.ts"
import sendEmail from "@/actions/sendEmail"
import z from "zod"

const oprukaSchema = z.object({
  ime: z.string(),
  email: z.string(),
  kontaktTel: z.string(),
  poruka: z.string(),
})

const KontaktFroma = () => {
  const clientSendEmail = async (formData: FormData) => {
    // construct new poruka object

    const poruka = {
      ime: formData.get("ime"),
      email: formData.get("email"),
      tel: formData.get("tel"),
      poruka: formData.get("poruka"),
    }

    // zod client-side validation

    await sendEmail(formData)
  }

  return (
    <form action={clientSendEmail}>
      <div className="felx felx-col ">
        <label htmlFor="ime" className="relative top-4 font-semibold">
          IME I PREZIME
        </label>
        <input
          type="name"
          name="ime"
          className="w-full border-b-4 border-b-green-dark bg-transparent"
          id="ime"
        />
      </div>
      <div className="felx felx-col ">
        <label htmlFor="email" className="relative top-4 font-semibold">
          EMAIL
        </label>
        <input
          type="email"
          name="email"
          className="w-full border-b-4 border-b-green-dark bg-transparent"
          id="email"
        />
      </div>
      <div className="felx felx-col ">
        <label
          htmlFor="kontakt-telefon"
          className="relative top-4 font-semibold"
        >
          KONTAKT TELEFON
        </label>
        <input
          type="phone"
          name="tel"
          className="w-full border-b-4 border-b-green-dark bg-transparent"
          id="tel"
        />
      </div>
      <div className="felx felx-col ">
        <label htmlFor="poruka" className="font-semibold">
          PORUKA
        </label>
        <textarea
          className=" mt-2 h-32 w-full rounded-lg border-4 border-dashed border-green-light bg-transparent p-4 placeholder:text-green-light"
          id="poruka"
          name="poruka"
          placeholder="Upišite svoju poruku ovdje..."
        />
      </div>
      <button className="flex items-center justify-center rounded-lg bg-green-light p-2 font-extrabold text-white">
        POŠALJI PORUKU
        <SendIcon className="ml-2 w-4 text-white" />
      </button>
    </form>
  )
}

export default KontaktFroma
