import { Exclamation } from "@/components/icons"

import React from "react"

const ToastError = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center gap-2 rounded-md border-2 border-[#F25D5D] border-opacity-25 bg-[#C32929] px-6 py-4 text-[#F9C7C7] shadow-xl">
      {" "}
      <Exclamation className="mr-2 h-5 w-5" />
      {message}
    </div>
  )
}

export default ToastError
