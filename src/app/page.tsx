import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "vassourao",
    name: "Vassourão de Terreiro",
    description:
      "Vassourão de terreiro de café com 3 carreiras para máxima eficiência",
    image: "/img/vassourao/1.jpeg",
  },
  {
    id: "rosca-esparramadora",
    name: "Rosca Esparramadora",
    description: "Esparrame palha, esterco e compostos em menos de 3 minutos",
    image: "/img/rosca-esparramadora/1.png",
  },
  {
    id: "jogador-herbicida",
    name: "Jogador de Herbicida",
    description: "Jogador de Herbicida especialmente desenvolvido para café",
    image: "/img/pato/2.png",
  },
  {
    id: "silo-movel",
    name: "Silo Móvel",
    description: "Silo com capacidade para mais de 6.000 litros de café",
    image: "/img/silo/1.png",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-12 text-center">
        Cristo Rei Implementos Agrícolas
      </h1>

      <div className="space-y-8">
        {products.map((product, index) => (
          <Card
            key={product.id}
            className="flex flex-col md:flex-row overflow-hidden"
          >
            <div
              className={`md:w-1/2 ${index % 2 === 1 ? "md:order-last" : ""}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {product.name}
              </h2>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <Link href={`/produtos/${product.id}`} className="self-start">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50"
                >
                  Ver Detalhes
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
