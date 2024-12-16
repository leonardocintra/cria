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
import React, { useRef } from "react";
import { teams, products } from "@/config";
import { PhoneCall } from "lucide-react";
import { IProduct } from "@/interfaces/IProduct";

export default function Home() {
  function handleWhastapp(numero: string) {
    return numero
      .replace(" ", "")
      .replace("(", "")
      .replace(")", "")
      .replace("-", "")
      .trim();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-slate-50 text-center">
        <div className="text-3xl font-sans">
          Orçamento direto com nossos representantes
        </div>
        <div className="text-vermei">
          Clique nos numeros para conversar via WhatsApp
        </div>
      </div>
      <div className="flex justify-center items-center p-6 space-x-3 sm:space-x-7">
        {teams.map((team, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              alt="team"
              className="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center sm:mb-0 mb-4"
              width={300}
              height={300}
              src={team.photo}
            />

            <div className="flex-grow text-center my-3">
              <h2 className="title-font font-medium text-lg text-white">
                {team.name}
              </h2>
              <h3 className="text-gray-400 mb-3 font-mono">{team.cargo}</h3>
            </div>

            <Link
              target="_blank"
              href={`https://wa.me/55${handleWhastapp(team.phone)}?text=Ola, ${
                team.name
              }! Vim do site Cria Implementos Agricolas e gostaria de mais informações...`}
            >
              <div className="text-white flex space-x-2 border-2 border-slate-500 rounded-lg hover:bg-vermei hover:text-white justify-center items-center p-2 transition-colors">
                <div>
                  <PhoneCall />
                </div>
                <div className="inline-flex  space-x-3 text-xs sm:text-xl">
                  {team.phone}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        {products.map((product: IProduct) => (
          <Card
            key={product.id}
            className="flex flex-col md:flex-row overflow-hidden"
          >
            <div className="md:w-1/2">
              <ProductCarousel product={product} />
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

function ProductCarousel({ product }: { product: IProduct }) {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
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
  );
}
