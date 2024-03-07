"use client"

// Form for smaller screens

import { porukaSchema, Poruka } from "@/lib/types"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useRef } from "react"
import { toast } from "sonner"
import ToastSuccess from "./toast/ToastSuccess"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas-lite"
import ToastError from "./toast/ToastError"

const KontaktFroma = () => {
  const imeRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const telRef = useRef<HTMLInputElement | null>(null)
  const porukaRef = useRef<HTMLTextAreaElement | null>(null)

  const {
    handleSubmit,
    register,
    setFocus,
    formState: { errors, isSubmitting },
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

  useEffect(() => {
    if (isFlyingInput) {
      isSubmitting
        ? (isFlyingInput.value = true)
        : (isFlyingInput.value = false)
    }
  }, [isSubmitting])

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
        : toast(<ToastError message={responseData.error} />, {
            unstyled: true,
            position: "top-center",
          })
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error)
      toast(
        <ToastError message="Nešto nije u redu. Pukušajte ponovno ili nas kontaktirajte direktno putem e-maila/telefonom." />,
        { unstyled: true, position: "top-center", duration: 8000 }
      )
      // Handle the error
    }

    await new Promise((resolve) => setTimeout(resolve, 300))
  }

  const { rive, RiveComponent } = useRive({
    src: "/rive/sendIcon.riv",
    stateMachines: "Fly",
    autoplay: true,
  })

  const isFlyingInput = useStateMachineInput(rive, "Fly", "isFlying")

  return (
    <div>
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
          className={`flex items-center justify-center rounded-lg bg-green-light p-2 px-3 py-3 text-lg font-extrabold text-white hover:bg-green-light-hover hover:shadow-lg focus:bg-green-light-hover ${
            isSubmitting ? "cursor-wait bg-green-light-hover" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "" : "Pošalji Poruku"}
          <RiveComponent className="h-8 w-8" />
        </button>
        {errors.root && (
          <p className="mt-1 text-red-500">{errors.root.message}</p>
        )}
      </form>
    </div>
  )
}

export default KontaktFroma
