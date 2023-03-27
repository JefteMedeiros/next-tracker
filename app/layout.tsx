import React from "react"
import { Nunito } from "@next/font/google"
import Image from "next/image"
import Link from "next/link"

import shape from "../public/Intersect.png"

import "./global.css"

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${nunito.variable}`} lang="pt-br">
      <head />
      <body className="relative overflow-x-hidden font-nunito flex h-[100dvh] flex-col justify-between">
        <header className="max-w-7xl m-auto w-full text-xl pt-16 font-nunito text-white">
          <nav className="flex justify-end gap-6">
            <Link href="#">Doar</Link>
            <Link href="#">Login</Link>
          </nav>
        </header>
        <main className="flex-1 max-w-[1360px] w-full m-auto">{children}</main>
        <Image
          className="w-full absolute bottom-0 -z-10 h-[400px]"
          src={shape}
          priority
          aria-hidden="true"
          alt=""
        />
        <footer className="max-w-7xl m-auto w-full py-4 text-white text-center">
          <p>&copy; {new Date().getFullYear()} Next Tracker</p>
        </footer>
      </body>
    </html>
  )
}
