import Image from "next/image";

interface ProdutoCardImagemProps {
  alt: string;
  src: string | "imagem";
  className?: string;
}

export default function ProdutoCardImagem(props: ProdutoCardImagemProps) {
  return (
    <Image
      className={`${props.className} rounded-lg shadow-lg shadow-amber-900`}
      src={`/img/${props.src}`}
      alt={`${props.src}`}
      width={200}
      height={200}
    />
  );
}
