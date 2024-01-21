"use client"

import React, { useEffect, useRef, useState } from "react"
import "./styles.css"
import { HamMenuIcon } from "@/public/icons"
import { XIcon } from "@/public/icons"
import Logo from "@/public/logo.svg"
import NavLinks from "./navLinks"

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const prevScrollPositionRef = useRef(0)

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.scrollY
      setIsHidden(prevScrollPositionRef.current < currentScrollPosition)
      prevScrollPositionRef.current = currentScrollPosition
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const logHidden = () => {
    console.log(isHidden)
  }

  return (
    <nav
      className={`nav fixed z-10 flex h-16 w-full justify-between bg-background-light p-2 px-4 drop-shadow-lg transition-transform ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-center">
        <Logo className="w-40" />
      </div>
      <NavLinks />
      <div className="flex items-center justify-center">
        {isOpened ? (
          <XIcon
            onClick={() => setIsOpened(false)}
            className="w-8 text-green-dark"
          />
        ) : (
          <HamMenuIcon
            onClick={() => setIsOpened(true)}
            className="w-10 text-green-dark"
          />
        )}
      </div>
    </nav>
  )
}

export default Nav
