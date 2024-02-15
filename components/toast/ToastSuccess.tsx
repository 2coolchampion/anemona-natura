import { Check } from "@/components/icons"

const ToastSuccess = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center rounded-md border-2 border-[#C7F9DA] border-opacity-25 bg-green-light-hover px-6 py-4 text-[#C7F9DA] shadow-xl">
      {" "}
      <Check className="mr-2 w-5 " />
      {message}
    </div>
  )
}

export default ToastSuccess
