import Image from "next/image";
import Link from "next/link";

export default function MenuHeader() {
  return (
    <header className="px-4 lg:px-6 flex items-center">
      <Link className="flex items-center justify-center mt-2" href="#">
        <div className="md:ml-64">
          <Image
            alt="Cria - Logo"
            src={"/logo.png"}
            className="h-auto w-auto"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="md:text-3xl font-medium hover:underline underline-offset-4"
          href="#"
        >
          Novidades
        </Link>
        <Link
          className="md:text-3xl font-medium hover:underline underline-offset-4"
          href="#"
        >
          Quem somos
        </Link>
        <Link
          className="md:text-3xl font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
