import Image from "next/image";
import Link from "next/link";

interface ProdutoCardProps {
  title: string;
  href: string;
  alt: string;
  imageSrc: string;
}

export default function ProdutoCard({
  title,
  href,
  alt,
  imageSrc,
}: ProdutoCardProps) {
  return (
    <Link
      className="flex flex-col items-center justify-center rounded-lg border border-gray-200  bg-white shadow-sm p-4 text-center transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
      href={href}
    >
      <Image
        alt={alt}
        className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
        height={1200}
        src={imageSrc}
        width={1600}
      />
      <span className="font-medium">{title}</span>
    </Link>
  );
}
