import type { Metadata } from "next";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cria - Implementos Agricolas",
  description: "Implementos agricolas para fazenda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-black">
        <header className="bg-slate-400 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-3">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="Cristo Rei Implementos Logo"
                width={200}
                height={50}
                className="object-contain"
              />
            </Link>
            {/* <NavigationMenu>
              <NavigationMenuList className="flex space-x-4 text-2xl sm:text-4xl">
                <NavigationMenuItem>
                  <Link href="/" className="text-white hover:text-vermei transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/contato"
                    className="text-white hover:text-vermei transition-colors"
                  >
                    Contato
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu> */}
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-vermei text-white py-8">
          <div className="container mx-auto text-center">
            © 2023 - {new Date().getFullYear()} | Cristo Rei Implementos. Todos
            os direitos reservados.
          </div>
          <div className="container mx-auto text-center">
            CNPJ: 44.166.165/0001-03
          </div>

          <div className="container mx-auto text-center my-3">
            Desenvolvido por{" "}
            <Link
              className="underline font-mono font-semibold"
              target="_blank"
              href={"https://www.leonardocintra.com.br"}
            >
              Leonardo Cintra
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
