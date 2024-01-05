"use client"

import React, { useEffect, useRef, useState } from "react"
import "./styles.css"

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
      className={`nav fixed z-10 flex h-16 w-full justify-between bg-indigo-800 p-2 drop-shadow-lg transition-transform ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="h-full w-[180px] bg-indigo-200"></div>
      <div className="h-full w-[50px] bg-indigo-200"></div>
    </nav>
  )
}

export default Nav
