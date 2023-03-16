import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./globals.css";

export const metadata = {
  title: "Cristo Rei Implementos Agricolas",
  description: "Implementos Agricolas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-[#fef6e1] text-gray-600">
        <Nav />
        <div className="p-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
