"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTractor, FaBars, FaWhatsapp } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import NavLink from "./Nav/NavLink";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="p-5 bg-white shadow-lg shadow-green-800 md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <div className="flex items-center">
            <Image
              className="inline mx-3"
              src={"/img/logo.png"}
              alt="logo"
              width={100}
              height={100}
            />
            <div className="hidden xl:block text-3xl">
              Cristo Rei - Implementos Agrícolas
              <FaTractor className="inline ml-2" />
            </div>
          </div>
        </span>

        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-3xl cursor-pointer md:hidden block mx-2"
        >
          <FaBars className={`${navOpen ? "hidden" : "block"}`} />
          <TfiClose className={`${navOpen ? "block" : "hidden"}`} />
        </button>
      </div>

      <ul
        className={`${navOpen ? "top-[80px] opacity-100" : "opacity-0"}
         md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500`}
      >
        <NavLink href="/" descricao="Home" />
        <NavLink href="/contato" descricao="Contato" />

        <button className="flex items-center bg-red-500 text-white duration-300 px-6 py-2 mx-4 hover:bg-red-700 rounded gap-3">
          Whatsapp
          <FaWhatsapp className="text-xl" />
        </button>
      </ul>
    </nav>
  );
}
