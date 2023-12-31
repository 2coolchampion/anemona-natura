import React from "react"

type ContactDesktopProps = {
  className?: String
}

const ContactDesktop: React.FC<ContactDesktopProps> = ({ className = "" }) => {
  return (
    <div
      className={`top-8 ml-10 mt-8 h-[36rem] rounded bg-green-800 max-[1423px]:ml-0 max-[1423px]:w-full min-[1423px]:w-[50rem]  
    ${className}`}
    ></div>
  )
}

export default ContactDesktop
