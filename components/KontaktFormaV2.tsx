"use client"

import { SendIcon } from "@/components/icons"
import { porukaSchema, Poruka } from "@/lib/types"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import ToastSuccess from "./toast/ToastSuccess"

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

      // Handle success or error response
      responseData.success
        ? toast(<ToastSuccess message={responseData.success} />, {
            unstyled: true,
          })
        : toast.error(responseData.error)
    } catch (error) {
      // Handle the fetching error
      console.error("There was a problem with the fetch operation:", error)
      toast.error("Something went wrong. Please try again later.")
    }
  }

  return (
    <div>
      <form
        className="flex flex-col gap-6 text-green-dark has-[:focus]:outline-none [&_button]:outline-none [&_input]:outline-none [&_textarea]:outline-none"
        onSubmit={handleSubmit(clientSendEmailAPI)}
      >
        <div className="felx felx-col relative">
          <label
            htmlFor="ime"
            className="font-semibold text-white hover:cursor-pointer"
          >
            IME I PREZIME
          </label>
          <input
            {...register("ime")}
            type="name"
            name="ime"
            className="mt-2 w-full rounded-md border-2 border-white/5 bg-white/20 px-3 py-3  focus:border-white/20 focus:bg-white/30"
            id="ime"
          />
          {errors.ime && (
            <p className="mt-1 text-red-500">{errors.ime.message}</p>
          )}
        </div>
        <div className="felx felx-col relative">
          <label
            htmlFor="email"
            className="font-semibold text-white hover:cursor-pointer"
          >
            EMAIL
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            className="mt-2 w-full rounded-md border-2 border-white/5 bg-white/20 px-3 py-3 focus:border-white/20 focus:bg-white/30 "
            id="email"
          />
          {errors.email && (
            <p className="mt-1 text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="felx felx-col relative">
          <label
            htmlFor="tel"
            className="font-semibold text-white hover:cursor-pointer"
          >
            KONTAKT TELEFON
          </label>
          <input
            {...register("tel")}
            type="tel"
            name="tel"
            className="mt-2 w-full rounded-md border-2 border-white/5 bg-white/20 px-3 py-3 focus:border-white/20 focus:bg-white/30 "
            id="tel"
          />
          {errors.tel && (
            <p className="mt-1 text-red-500">{errors.tel.message}</p>
          )}
        </div>
        <div className="felx felx-col relative">
          <label htmlFor="poruka" className="font-semibold text-white">
            PORUKA
          </label>
          <textarea
            {...register("poruka")}
            className="mt-2 h-32 w-full rounded-md border-2 border-white/5 bg-white/20 p-4 placeholder:text-white focus:border-white/20 focus:bg-white/30 lg:resize-none"
            id="poruka"
            name="poruka"
            placeholder="Upišite svoju poruku ovdje..."
          />
          {errors.poruka && (
            <p className="mt-1 text-red-500">{errors.poruka.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="flex items-center justify-center rounded-lg bg-white/70 p-2 px-3 py-3 font-extrabold text-green-dark hover:bg-white hover:shadow-md hover:shadow-[#656150] focus:bg-white"
        >
          POŠALJI PORUKU
          <SendIcon className="ml-2 w-6 text-green-dark" />
        </button>
        {errors.root && (
          <p className="mt-1 text-red-500">{errors.root.message}</p>
        )}
      </form>
    </div>
  )
}

export default KontaktFormaV2
