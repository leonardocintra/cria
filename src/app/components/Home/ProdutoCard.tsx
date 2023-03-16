import Link from "next/link";
import { produtoData } from "../../api/produtos/ProdutoData";
import IProdutoDetalhe from "../../interfaces/IProduto";
import ProdutoCardImagem from "./ProdutoCardImagem";

const produtos: IProdutoDetalhe[] = produtoData;

export default function ProdutoCard() {
  return (
    <div>
      {produtos.map((produto) => (
        <div
          key={`produto-${produto.slug}`}
          className="flex justify-center mt-5"
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-4/5">
            <Link href="produto">
              <div className="basis-1/3 bg-lime-100 p-5 rounded-md mt-4">
                <h3 className="text-4xl font-sono text-center">
                  {produto.titulo}
                </h3>
                <h4 className="font-poppins mx-4 my-4">{produto.subTitulo}</h4>
                <p className="font-poppins text-justify">{produto.descricao}</p>
              </div>

              <div className="basis-2/3 grid md:grid-cols-3 gap-2">
                {produto.fotos.map((fotos, index) => (
                  <ProdutoCardImagem
                    key={index}
                    alt={fotos.alt}
                    src={fotos.src}
                    width={400}
                    height={400}
                  />
                ))}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
