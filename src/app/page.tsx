import ProdutoCard from "@/components/custom/produto/produto-card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 bg-gradient-to-t from-slate-100 via-blue-100 to-slate-100 rounded-lg m-2">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 xl:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Equipamentos Agrícolas
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Os melhores equipamentos para a sua fazenda. Tratores,
                    colheitadeiras, plantadeiras e muito mais.
                  </p>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <Image
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height={400}
                  width={600}
                  src="https://res.cloudinary.com/rexhelicoides/image/upload/v1712940564/sydugntbvx7pyfgxizo5.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-4 md:grid-cols-[1fr_500px] md:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Nossa linha de produtos
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Conheça os equipamentos que temos disponíveis para a sua
                  fazenda.
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-2 md:gap-4">
                <ProdutoCard
                  title="Pato"
                  imageSrc="https://res.cloudinary.com/rexhelicoides/image/upload/v1712963050/pato/1_gysb67.png"
                  alt="Pato"
                  href="/produto/pato"
                />
                <ProdutoCard
                  title="Silo"
                  imageSrc="https://res.cloudinary.com/rexhelicoides/image/upload/v1712963134/silo/2_cdvx7c.png"
                  alt="Silo"
                  href="/produto/silo"
                />
                <ProdutoCard
                  title="Rosca esparramadeira"
                  imageSrc="https://res.cloudinary.com/rexhelicoides/image/upload/v1712963147/rosca-esparramadora/5_c9fo9b.png"
                  alt="Rosca esparramadeira"
                  href="/produto/rosca-esparramadeira"
                />
                <ProdutoCard
                  title="Vassourão"
                  imageSrc="https://res.cloudinary.com/rexhelicoides/image/upload/v1712963125/vassourao/1_enqx2y.jpg"
                  alt="Vassourão"
                  href="/produto/vassourao"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
