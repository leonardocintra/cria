"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const productDetails = {
  name: "Vassourão de Terreiro",
  description: `Com 3 carreiras, o vassourão da Cristo Rei oferece muito mais eficiência e rapidez 
      varrendo o terreiro após amontoar o café. Geralmente, os vassourões oferecidos hoje no mercado 
      contém apenas 2 carreiras, deixando o trabalho mais lento e laborioso.`,
  images: [
    "/placeholder-vassourao-1.jpg",
    "/placeholder-vassourao-2.jpg",
    "/placeholder-vassourao-3.jpg",
  ],
  measurements: [
    { label: "Comprimento", value: "2,5 metros" },
    { label: "Número de Carreiras", value: "3" },
    { label: "Material", value: "Aço galvanizado" },
  ],
};

export default function ProductDetails() {
  const product = productDetails;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={product.images[currentImageIndex]}
              alt={`${product.name} - Imagem ${currentImageIndex + 1}`}
              className="w-full h-96 object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {product.images.map((_: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? "bg-green-700" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}
