"use client"

import { SendIcon } from "/public/icons/index.ts"
import sendEmail from "@/actions/sendEmail"
import { porukaSchema, Poruka } from "@/lib/types"
import z from "zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const KontaktFroma = () => {
  const { handleSubmit, register } = useForm<Poruka>({
    resolver: zodResolver(porukaSchema),
    defaultValues: {
      ime: "Exaplinno HernandezzZZzzZZz",
      email: "exampleemail@gmail.com",
      tel: "022 111 222",
      poruka: "Default poruka",
    },
  })

  const clientSendEmail: SubmitHandler<Poruka> = async (data) => {
    // zod client-side validation
    console.log("data: ", data)
    const result = porukaSchema.safeParse(data)
    if (!result.success) {
      //output error message if something is wrong in the client-side validation
      let errorMessage = ""
      result.error.issues.forEach((issue) => {
        errorMessage += `${issue.path}: ${issue.message}.\n`
      })

      console.warn(errorMessage)
      return
    }

    const response = await sendEmail(result.data)
    if (response?.error) {
      console.error(response.error)
    }
  }

  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={handleSubmit(clientSendEmail)}
    >
      <div className="felx felx-col ">
        <label htmlFor="ime" className="relative top-4 font-semibold">
          IME I PREZIME
        </label>
        <input
          {...register("ime")}
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
          {...register("email")}
          type="email"
          name="email"
          className="w-full border-b-4 border-b-green-dark bg-transparent"
          id="email"
        />
      </div>
      <div className="felx felx-col ">
        <label htmlFor="tel" className="relative top-4 font-semibold">
          KONTAKT TELEFON
        </label>
        <input
          {...register("tel")}
          type="tel"
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
          {...register("poruka")}
          className=" mt-2 h-32 w-full rounded-lg border-4 border-dashed border-green-light bg-transparent p-4 placeholder:text-green-light"
          id="poruka"
          name="poruka"
          placeholder="Upišite svoju poruku ovdje..."
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center rounded-lg bg-green-light p-2 font-extrabold text-white"
      >
        POŠALJI PORUKU
        <SendIcon className="ml-2 w-4 text-white" />
      </button>
    </form>
  )
}

export default KontaktFroma
