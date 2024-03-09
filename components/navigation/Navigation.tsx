"use client"

import React, { useEffect, useRef, useState } from "react"
import "./styles.css"
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons"
import Logo from "@/public/logo.svg"
import NavLinks from "./navLinks"
import Link from "next/link"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas-lite"

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false) // Hidden means that the nav is not visible
  const [isOpened, setIsOpened] = useState(false) // Opened is used by the mobile menu (mobile menu is expanded/opened)
  const touchStartX = useRef(0)
  const prevScrollPositionRef = useRef(0)

  const { rive, RiveComponent } = useRive({
    src: "/rive/xicon.riv",
    stateMachines: "Default",
    autoplay: true,
  })

  const onClickInput = useStateMachineInput(rive, "Default", "Click")

  useEffect(() => {
    onClickInput && onClickInput.fire()
  }, [isOpened])

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.scrollY
      setIsHidden(prevScrollPositionRef.current < currentScrollPosition)
      setIsOpened(
        prevScrollPositionRef.current < currentScrollPosition ? false : isOpened
      )
      prevScrollPositionRef.current = currentScrollPosition
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.changedTouches[0].screenX
    }
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].screenX
      const distance = touchEndX - touchStartX.current
      // Detect a swipe from right to left on the right side of the screen
      if (distance < -50 && touchStartX.current > window.innerWidth - 100) {
        setIsOpened(true) // Open the mobile menu
      }
    }
    document.addEventListener("touchstart", handleTouchStart)
    document.addEventListener("touchend", handleTouchEnd)
    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return (
    <>
      <header className="fixed top-0 z-20 w-full">
        <div
          className={`transition-transform ${
            isHidden ? "-translate-y-full" : "translate-y-0"
          } ${isOpened ? "" : "shadow-xl"}`}
        >
          <div className="hidden w-full justify-center bg-green-dark py-2 md:flex ">
            <div className="flex w-full justify-end gap-5 pr-4 2xl:max-w-[1535px]">
              <div className="flex items-center gap-2 text-sm text-background-light">
                <PhoneIcon className="h-5 w-5" />
                <a href="tel:%2B385992868188">+385 99 286 8188</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background-light">
                <MailIcon className="h-5 w-5" />
                <a href="mailto:anemona.natura.info@gmail.com">
                  anemona.natura.info@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background-light">
                <PinIcon className="h-5 w-5" />
                <p>M.J. Šporera 20, 47000 Karlovac</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-background-light">
            <nav className="nav mx-auto flex h-16 w-full justify-between px-4 py-2 2xl:max-w-[1535px]">
              {/* LOGO */}
              <Link href={"/"} className="flex items-center justify-center">
                <Logo className="w-40" />
              </Link>
              {/* NAVIGATION LINKS - MD */}
              <div className="hidden md:flex md:flex-row">
                <NavLinks />
              </div>
              {/* HAM MENU ICON */}
              <button
                onClick={() => setIsOpened(!isOpened)}
                className="flex items-center justify-center md:hidden"
              >
                <RiveComponent className="h-16 w-24" />
              </button>
            </nav>
          </div>
        </div>
        {/* NAVIGATION LINKS - MOBILE */}
        <div
          className={`drop-shadow-2xl transition-transform ${
            isHidden ? "-translate-y-[27rem]" : "translate-y-0"
          } ${
            isOpened ? "flex" : "hidden"
          } flex-col bg-background-light md:hidden`}
        >
          <NavLinks />
          <div className="mt-8 flex flex-col bg-green-light px-2 py-3 text-lg">
            <div className="flex items-center px-2 py-3">
              <PhoneIcon className="mr-2 inline-block h-7 w-7 fill-current text-background-light" />
              <span className="text-background-light">099 286 8118</span>
            </div>
            <div className="flex items-center overflow-x-auto px-2 py-3">
              <MailIcon className="mr-2 inline-block h-7 w-7 flex-none fill-current text-background-light" />
              <span className=" text-base text-background-light">
                anemona.natura.info@gmail.com
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-10 h-[130%] bg-black transition-opacity duration-1000 ease-out ${
          isOpened && !isHidden ? "opacity-50" : "opacity-0"
        }`}
        style={{ pointerEvents: isOpened ? "auto" : "none" }}
        onClick={() => setIsOpened(false)}
      ></div>
    </>
  )
}

export default Nav
