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
      ime: "",
      email: "",
      tel: "",
      poruka: "",
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
      className="flex flex-col gap-10 has-[:focus]:outline-none [&_input]:outline-none [&_textarea]:outline-none"
      onSubmit={handleSubmit(clientSendEmail)}
    >
      <div className="felx felx-col relative ">
        <input
          {...register("ime")}
          type="name"
          name="ime"
          className="peer-data-[has-value]: peer w-full border-b-4 border-b-green-dark  bg-transparent placeholder-transparent focus:outline-none"
          id="ime"
          placeholder="Ime i Prezime..."
        />
        <label
          htmlFor="ime"
          className="absolute -top-7 left-0 text-sm font-semibold transition-all duration-75 ease-out hover:cursor-pointer peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-sm"
        >
          IME I PREZIME
        </label>
      </div>
      <div className="felx felx-col relative">
        <input
          {...register("email")}
          type="email"
          name="email"
          placeholder="Email..."
          className="peer-data-[has-value]: peer w-full border-b-4 border-b-green-dark  bg-transparent placeholder-transparent focus:outline-none"
          id="email"
        />
        <label
          htmlFor="email"
          className="absolute -top-7 left-0 text-sm font-semibold transition-all duration-75 ease-out hover:cursor-pointer peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-sm"
        >
          EMAIL
        </label>
      </div>
      <div className="felx felx-col relative">
        <input
          {...register("tel")}
          type="tel"
          name="tel"
          placeholder="Kontakt broj..."
          className="peer-data-[has-value]: peer w-full border-b-4 border-b-green-dark  bg-transparent placeholder-transparent focus:outline-none"
          id="tel"
        />
        <label
          htmlFor="tel"
          className="absolute -top-7 left-0 text-sm font-semibold transition-all duration-75 ease-out hover:cursor-pointer peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-sm"
        >
          KONTAKT TELEFON
        </label>
      </div>
      <div className="felx felx-col relative">
        <label htmlFor="poruka" className="font-semibold">
          PORUKA
        </label>
        <textarea
          {...register("poruka")}
          className=" mt-2 h-32 w-full rounded-lg border-2 border-dashed border-green-light bg-transparent p-4 placeholder:text-green-light"
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
