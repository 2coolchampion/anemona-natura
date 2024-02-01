import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = [
  {
    name: "Naslovnica",
    href: "/",
  },
  {
    name: "Usluge",
    href: "/usluge",
  },
  {
    name: "EU Projekti",
    href: "/eu-projekti",
  },
]

const navLinks = () => {
  const pathname = usePathname()

  return (
    <ul className="mt-8 flex flex-col gap-4 px-4 py-2 text-xl md:m-0 md:flex-row md:items-center md:gap-6 md:p-0 md:text-base ">
      {NavLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <li key={link.name}>
            <Link
              href={link.href}
              key={link.name}
              className={`hover-underline-animation relative ${
                isActive ? "font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default navLinks
