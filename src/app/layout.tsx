import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/footer";
import MenuHeader from "@/components/custom/menu-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cria - Implementos agrícolas",
  description: "Implementos Agrícolas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <MenuHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
