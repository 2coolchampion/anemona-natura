"use client"

import { SendIcon } from "@/components/icons"
import { porukaSchema, Poruka } from "@/lib/types"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const KontaktFormaV2 = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<Poruka>({
    resolver: zodResolver(porukaSchema),
    defaultValues: {
      ime: "",
      email: "",
      tel: "",
      poruka: "",
    },
  })

  const clientSendEmailAPI: SubmitHandler<Poruka> = async (data) => {
    try {
      const result = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!result.ok) {
        throw new Error("Network response was not ok")
      }

      const responseData = await result.json()
      console.log(responseData)
      // Handle success or error response accordingly
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error)
      // Handle the error
    }
  }

  return (
    <form
      className="flex flex-col gap-6 has-[:focus]:outline-none [&_input]:outline-none [&_textarea]:outline-none"
      onSubmit={handleSubmit(clientSendEmailAPI)}
    >
      <div className="felx felx-col relative">
        <input
          {...register("ime")}
          type="name"
          name="ime"
          className="peer w-full border-b-4 border-b-green-dark bg-transparent  pb-1 placeholder-transparent focus:outline-none"
          id="ime"
          placeholder="Ime i Prezime..."
        />
        {errors.ime && <p className="text-red-500">{errors.ime.message}</p>}
        <label
          htmlFor="ime"
          className="absolute -top-7 left-0 text-sm font-semibold transition-all duration-75 ease-out hover:cursor-pointer peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-sm"
        >
          IME I PREZIME
        </label>
      </div>
      <div className="felx felx-col relative mt-8">
        <input
          {...register("email")}
          type="email"
          name="email"
          placeholder="Email..."
          className="peer w-full border-b-4 border-b-green-dark bg-transparent  pb-1 placeholder-transparent focus:outline-none"
          id="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <label
          htmlFor="email"
          className="absolute -top-7 left-0 text-sm font-semibold transition-all duration-75 ease-out hover:cursor-pointer peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-sm"
        >
          EMAIL
        </label>
      </div>
      <div className="felx felx-col relative mt-8">
        <input
          {...register("tel")}
          type="tel"
          name="tel"
          placeholder="Kontakt broj..."
          className="peer w-full border-b-4 border-b-green-dark bg-transparent  pb-1 placeholder-transparent focus:outline-none"
          id="tel"
        />
        {errors.tel && <p className="text-red-500">{errors.tel.message}</p>}
        <label
          htmlFor="tel"
          className="absolute -top-7 left-0 text-sm font-semibold transition-all duration-75 ease-out hover:cursor-pointer peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-sm"
        >
          KONTAKT TELEFON
        </label>
      </div>
      <div className="felx felx-col relative mt-8">
        <label htmlFor="poruka" className=" relative -top-2 font-semibold">
          PORUKA
        </label>
        <textarea
          {...register("poruka")}
          className="mt-1 h-32 w-full rounded-lg border-2 border-dashed border-green-light bg-transparent p-4 placeholder:text-green-light"
          id="poruka"
          name="poruka"
          placeholder="Upišite svoju poruku ovdje..."
        />
        {errors.poruka && (
          <p className="text-red-500">{errors.poruka.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="flex items-center justify-center rounded-lg bg-green-light p-2 font-extrabold text-white"
      >
        POŠALJI PORUKU
        <SendIcon className="ml-2 w-6 text-white" />
      </button>
      {errors.root && <p className="text-red-500">{errors.root.message}</p>}
    </form>
  )
}

export default KontaktFormaV2
