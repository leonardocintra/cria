"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const products = [
  {
    id: "vassourao",
    name: "Vassourão de Terreiro",
    description:
      "Vassourão de terreiro de café com 3 carreiras para máxima eficiência",
    images: [
      "/img/vassourao/1.jpg",
      "/img/vassourao/2.jpg",
      "/img/vassourao/3.jpg",
      "/img/vassourao/4.jpg",
      "/img/vassourao/5.jpg",
      "/img/vassourao/6.jpg",
      "/img/vassourao/7.jpg",
      "/img/vassourao/8.jpg",
      "/img/vassourao/9.jpg",
      "/img/vassourao/10.jpg",
      "/img/vassourao/11.jpg",
    ],
  },
  {
    id: "rosca-esparramadora",
    name: "Rosca Esparramadora",
    description: "Esparrame palha, esterco e compostos em menos de 3 minutos",
    images: [
      "/img/rosca-esparramadora/1.png",
      "/img/rosca-esparramadora/2.png",
      "/img/rosca-esparramadora/3.png",
    ],
  },
  {
    id: "silo-movel",
    name: "Silo Móvel",
    description: "Silo com capacidade para mais de 6.000 litros de café",
    images: ["/img/silo/1.png", "/img/silo/2.png", "/img/silo/3.png"],
  },
];

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-12 text-center">
        Cristo Rei Implementos Agrícolas
      </h1>

      <div className="space-y-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col md:flex-row overflow-hidden"
          >
            <div className="md:w-1/2">
              <Carousel
                className="w-full"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={image}
                        alt={`${product.name} - Imagem ${index + 1}`}
                        width={1500}
                        height={1500}
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
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
