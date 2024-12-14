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
    image: "/placeholder-vassourao.jpg", // Substitua pela imagem real
  },
  {
    id: "rosca-esparramadora",
    name: "Rosca Esparramadora",
    description: "Esparrame palha, esterco e compostos em menos de 3 minutos",
    image: "/placeholder-rosca.jpg", // Substitua pela imagem real
  },
  {
    id: "jogador-herbicida",
    name: "Jogador de Herbicida",
    description: "Jogador de Herbicida especialmente desenvolvido para café",
    image: "/placeholder-herbicida.jpg", // Substitua pela imagem real
  },
  {
    id: "silo-movel",
    name: "Silo Móvel",
    description: "Silo com capacidade para mais de 6.000 litros de café",
    image: "/placeholder-silo.jpg", // Substitua pela imagem real
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Cristo Rei Implementos Agrícolas
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <p className="mb-4">{product.description}</p>
              <Link href={`/produtos/${product.id}`}>
                <Button>Ver Detalhes</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
