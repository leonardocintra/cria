import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex">
      <div className="p-4">
        <h1 className="text-lg md:text-5xl">
          Cristo Rei - implementos agricolas
        </h1>
        <span>Facilitando seu trabalho no campo.</span>
        <br />
        <span>
          Implementos simples, práticos e muito eficientes para tornar seu
          trabalho mais fácil
        </span>
      </div>
      <Image
        className="hidden md:block"
        src={"/img/logo.png"}
        height={500}
        width={500}
        alt={"logo"}
      />
    </main>
  );
}
