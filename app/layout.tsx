import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Nav from "../components/navigation/Navigation"
import Footer from "@/components/Footer"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Anemona Natura - Stručne usluge i savjetovanje u šumarstvu",
    template: "%s - Anemona Natura",
  },
  description:
    "Anemona Natura d.o.o. nudi usluge u šumarstvu uključujući doznaku i otpremu drvnih sortimenata, procjenu vrijednosti šume, EU fondove, i lovno gospodarske planove. Djelujemo u cijeloj Hrvatskoj sa sjedištem u Karlovcu.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="main-container flex min-h-screen w-auto flex-col items-center justify-start overflow-hidden">
          {children}
        </main>
        <Footer />
        <Toaster />
        {/* <div className="breakpointer fixed bottom-8 right-8 flex h-8 w-8 items-center justify-center bg-orange-600 p-1 text-white sm:bg-green-500 md:bg-orange-300 lg:bg-blue-500 xl:bg-lime-400 xl:text-black 2xl:bg-pink-500 2xl:text-white"></div> */}
      </body>
    </html>
  )
}
