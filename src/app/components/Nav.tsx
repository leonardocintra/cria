"use client";

import { useState } from "react";
import { FaTractor, FaBars } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import NavLink from "./Nav/NavLink";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <FaTractor className="inline mr-3 text-red-700 text-4xl" />
          Cristo Rei
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
        className={`${navOpen ? "top-[80px] opacity-100": "opacity-0"}
         md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500`}
      >
        <NavLink href="/" descricao="Home" />
        <NavLink href="/" descricao="Implementos" />
        <NavLink href="/" descricao="Contato" />

        <button className="bg-red-600 text-white duration-500 px-6 py-2 mx-4 hover:bg-red-700 rounded">
          Whatsapp
        </button>
      </ul>
    </nav>
  );
}
