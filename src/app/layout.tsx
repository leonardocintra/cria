import Nav from "./components/Nav";
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
      <body className="bg-green-200">
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
