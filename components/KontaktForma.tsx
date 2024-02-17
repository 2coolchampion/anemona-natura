"use client"

import { SendIcon } from "@/components/icons"
import sendEmail from "@/actions/sendEmail"
import { porukaSchema, Poruka } from "@/lib/types"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef } from "react"
import { toast } from "sonner"
import ToastSuccess from "./toast/ToastSuccess"

const KontaktFroma = () => {
  const imeRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const telRef = useRef<HTMLInputElement | null>(null)
  const porukaRef = useRef<HTMLTextAreaElement | null>(null)

  const {
    handleSubmit,
    register,
    setError,
    setFocus,
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

  const { ref: imeRefRHF, ...imeRest } = register("ime")
  const { ref: emailRefRHF, ...emailRest } = register("email")
  const { ref: telRefRHF, ...telRest } = register("tel")
  const { ref: porukaRefRHF, ...porukaRest } = register("poruka")

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
            position: "top-center",
          })
        : toast.error(responseData.error)
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error)
      toast.error("Nešto nije u redu. Pokusajte ponovo kasnije.")
      // Handle the error
    }
  }

  // SERVER ACTIONS (NOT WORKING WITH NETLIFY)
  // const clientSendEmail: SubmitHandler<Poruka> = async (data) => {
  //   console.log("submitting form")
  //   try {
  //     const response = await sendEmail(data)
  //     if (response?.error) {
  //       setError("root", { message: response.error })
  //     } else {
  //       console.log(response)
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const focusRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.focus()
    }
  }

  return (
    <form
      className="flex flex-col gap-6 has-[:focus]:outline-none [&_input]:outline-none [&_textarea]:outline-none"
      onSubmit={handleSubmit(clientSendEmailAPI)}
    >
      <div className="felx felx-col relative">
        <input
          {...imeRest}
          ref={(element) => {
            imeRef.current = element
            imeRefRHF(element)
          }}
          type="name"
          name="ime"
          className="peer w-full border-b-4 border-b-green-dark bg-transparent  pb-1 placeholder-transparent focus:outline-none "
          id="ime"
          placeholder="Ime i Prezime..."
        />
        {errors.ime && (
          <p className="mt-1 text-red-500">{errors.ime.message}</p>
        )}
        <label
          htmlFor="ime"
          className="absolute -top-7 left-0 text-sm font-semibold transition-all duration-75 ease-out hover:cursor-pointer peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-sm"
          onClick={() => setFocus("ime")}
        >
          IME I PREZIME
        </label>
      </div>
      <div className="felx felx-col relative mt-8">
        <input
          {...emailRest}
          ref={(element) => {
            emailRef.current = element
            emailRefRHF(element)
          }}
          type="email"
          name="email"
          placeholder="Email..."
          className="peer w-full border-b-4 border-b-green-dark bg-transparent  pb-1 placeholder-transparent focus:outline-none"
          id="email"
        />
        {errors.email && (
          <p className="mt-1 text-red-500">{errors.email.message}</p>
        )}
        <label
          htmlFor="email"
          className="absolute -top-7 left-0 text-sm font-semibold transition-all duration-75 ease-out hover:cursor-pointer peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-sm"
          onClick={() => setFocus("email")}
        >
          EMAIL
        </label>
      </div>
      <div className="felx felx-col relative mt-8">
        <input
          {...telRest}
          ref={(element) => {
            telRef.current = element
            telRefRHF(element)
          }}
          type="tel"
          name="tel"
          placeholder="Kontakt broj..."
          className="peer w-full border-b-4 border-b-green-dark bg-transparent  pb-1 placeholder-transparent focus:outline-none"
          id="tel"
        />
        {errors.tel && (
          <p className="mt-1 text-red-500">{errors.tel.message}</p>
        )}
        <label
          htmlFor="tel"
          className="absolute -top-7 left-0 text-sm font-semibold transition-all duration-75 ease-out hover:cursor-pointer peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-focus:-top-7 peer-focus:text-sm"
          onClick={() => setFocus("tel")}
        >
          KONTAKT TELEFON
        </label>
      </div>
      <div className="felx felx-col relative mt-8">
        <label
          htmlFor="poruka"
          className=" relative -top-2 cursor-pointer font-semibold"
          onClick={() => setFocus("poruka")}
        >
          PORUKA
        </label>
        <textarea
          {...porukaRest}
          ref={(element) => {
            porukaRef.current = element
            porukaRefRHF(element)
          }}
          className="mt-1 h-32 w-full rounded-lg border-2 border-dashed border-green-light bg-transparent p-4 placeholder:text-green-light"
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
        className="flex items-center justify-center rounded-lg bg-green-light p-2 font-extrabold text-white"
      >
        POŠALJI PORUKU
        <SendIcon className="ml-2 w-6 text-white" />
      </button>
      {errors.root && (
        <p className="mt-1 text-red-500">{errors.root.message}</p>
      )}
    </form>
  )
}

export default KontaktFroma
