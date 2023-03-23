import React from "react"
import { Josefin_Sans, Nunito, Roboto_Mono } from "@next/font/google"

import "./global.css"

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
})

const josefin_sans = Josefin_Sans({
  variable: "--font-josefin-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${josefin_sans.variable} ${nunito.variable}`} lang="en">
      <head />
      <body className="flex h-screen flex-col justify-between">
        <header className="font-nunito max-w-7xl m-auto flex justify-end gap-6 w-full my-14 text-white">
          <p>Doar</p>
          <p>Login</p>
        </header>
        <main className="flex-1 max-w-7xl m-auto">{children}</main>
        <footer className="max-w-7xl font-josefin m-auto w-full py-4 text-white text-center">
          <p>&copy; {new Date().getFullYear()} Next Tracker</p>
        </footer>
      </body>
    </html>
  )
}
