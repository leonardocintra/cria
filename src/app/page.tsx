import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center">
        <div className="p-4  md:w-1/2">
          <div className="md:flex items-center space-x-3 p-5">
            <h1 className="text-3xl font-bold text-red-900/80 font-sono">
              Cristo Rei
            </h1>
            <h4 className="font-calligraffitti text-xl">
              Implementos agrícolas
            </h4>
          </div>
          <div className="font-poppins flex flex-col">
            <span className="font-bold text-4xl">
              Facilitando seu trabalho no campo.
            </span>
            <span className="font-extrabold md:text-3xl text-left mt-5">
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
    </main>
  );
}
