import React from "react"

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-screen flex-col justify-start bg-background-light xl:max-w-[80vw] 2xl:w-4/5 2xl:max-w-[1535px]">
      {children}
    </main>
  )
}

export default MainWrapper
