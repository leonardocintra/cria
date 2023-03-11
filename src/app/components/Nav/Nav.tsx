"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTractor, FaBars, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import NavLink from "./NavLink";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="md:flex md:justify-center md:mt-5">
      <nav className="p-5 md:flex md:items-center md:justify-between border-b-2 border-gray-400 md:w-3/4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <Link href={"/"}>
              <div className="flex items-center">
                <FaTractor className="text-6xl mr-2" />
                <h1 className="text-4xl md:text-6xl font-sans">Cristo Rei</h1>
              </div>
              <h3 className="text-base italic pl-20">Implementos agrícolas</h3>
            </Link>
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
          className={`${navOpen ? "top-[120px] opacity-100" : "opacity-0"}
        md:flex md:items-center md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500`}
        >
          <NavLink href="/contato" descricao="Contato" icone={<FiMail />} />

          <button className="flex items-center bg-red-500 text-white duration-300 px-6 py-2 mx-4 hover:bg-red-700 rounded gap-3">
            Whatsapp
            <FaWhatsapp className="text-xl" />
          </button>
        </ul>
      </nav>
    </div>
  );
}
