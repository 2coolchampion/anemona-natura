"use client"

import React, { useEffect, useRef, useState } from "react"
import "./styles.css"
import { HamMenuIcon } from "@/public/icons"

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false)
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
      className={`nav fixed z-10 flex h-16 w-full justify-between bg-background-light p-2 drop-shadow-lg transition-transform ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="h-full w-[180px] bg-green-dark"></div>
      <div className="flex h-full items-center justify-center">
        <HamMenuIcon className="w-10 text-green-dark" />
      </div>
    </nav>
  )
}

export default Nav
