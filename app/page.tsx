import Image from "next/image"

import { Logo } from "../components/Logo/Logo"
import truck from "../public/Art.png"

export default function Home() {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col gap-9 text-white max-w-[756px]">
        <Logo />
        <h2 className="text-[3rem] font-nunito font-[600]">
          Rastrear suas encomendas nunca foi tão fácil
        </h2>
        <p className="text-[1.75rem] font-regular">
          Rastreie suas encomendas de serviços como o Aliexpress, Mercado Livre,
          OLX e muitos outros!
        </p>
        <button className="bg-primary text-[1.75rem] h-16 px-12 self-end">
          Iniciar Rastreio
        </button>
      </div>
      <Image src={truck} priority alt="Imagem de caminhão" />
    </section>
  )
}
