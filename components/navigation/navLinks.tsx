import React from "react"
import Link from "next/link"

const navLinks = () => {
  return (
    <ul className="text-md mt-8 flex flex-col gap-4 px-4 py-2 text-3xl md:m-0 md:flex-row md:items-center md:gap-6 md:p-0 md:text-base ">
      <li>
        <Link href="/" className="hover-underline-animation relative">
          Naslovnica
        </Link>
      </li>
      <li>
        <Link href="/usluge" className="hover-underline-animation relative">
          Usluge
        </Link>
      </li>
      <li>
        <Link
          href="/eu-projekti"
          className="hover-underline-animation relative"
        >
          EU Projekti
        </Link>
      </li>
    </ul>
  )
}

export default navLinks
