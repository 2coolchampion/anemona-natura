"use client"
import { useState, useEffect } from "react"

const CurrentYear = () => {
  const [year, setYear] = useState("")

  // useEffect only runs on the client, ensuring hydration safety
  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return <>{year}</>
}

export default CurrentYear
