import Image from "next/image";
import RootLayout from "./layout";
import Categoria from "../components/Home/Categoria";
import ProdutoCard from "../components/Home/ProdutoCard";

export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <div className="flex justify-center">
        <div className="p-4  md:w-1/2">
          <div className="md:flex justify-center items-center space-x-3 p-5">
            <h1 className="text-3xl md:text-5xl font-bold text-red-900/80 font-montserrat">
              Cristo Rei
            </h1>
            <h4 className="font-calligraffitti text-2xl">
              Implementos agrícolas
            </h4>
          </div>
          <div className="font-poppins flex flex-col">
            <span className="font-bold text-2xl md:text-4xl text-orange-900 pl-4">
              Facilitando seu trabalho no campo.
            </span>
            <span className="md:text-3xl mt-5 text-orange-400 text-end font-extralight italic font-montserrat">
              Implementos simples, práticos e muito eficientes para tornar seu
              trabalho mais fácil
            </span>
          </div>
        </div>
        <Image
          className="hidden md:block"
          src={"/img/logo.png"}
          height={500}
          width={500}
          alt={"logo"}
        />
      </div>
      <Categoria />
      <ProdutoCard />
    </RootLayout>
  );
}
