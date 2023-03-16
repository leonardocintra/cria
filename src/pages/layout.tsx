import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function RootLayout({ children }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Cristo Rei - Implementos Agricolas</title>
        <meta
          name="description"
          content="CRIA - Cristo Rei Implementos Agricolas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#fef6e1] text-gray-600">
        <Nav />
        <div className="">{children}</div>
        <Footer />
      </main>
    </>
  );
}
