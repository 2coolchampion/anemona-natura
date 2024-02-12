import Xicon from "@/components/icons/xIcon.svg"

const ToastSuccess = () => {
  return (
    <div className="flex items-center rounded-xl border bg-green-500 px-8 py-6 shadow-xl">
      {" "}
      <Xicon className="mr-2 w-4 text-green-dark" />
      Poruka je uspješno poslana!
    </div>
  )
}

export default ToastSuccess
