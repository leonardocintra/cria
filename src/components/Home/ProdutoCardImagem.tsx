import Image from "next/image";

interface ProdutoCardImagemProps {
  alt: string | "foto";
  src: string;
  width: number;
  height: number;
  className?: string;
}

export default function ProdutoCardImagem(props: ProdutoCardImagemProps) {
  return (
    <Image
      className={`${props.className} rounded-lg shadow-lg shadow-amber-900 hover:opacity-75`}
      src={`${props.src}`}
      alt={`${props.src}`}
      width={props.width}
      height={props.height}
    />
  );
}
