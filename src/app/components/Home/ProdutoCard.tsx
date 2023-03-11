import ProdutoCardImagem from "./ProdutoCardImagem";

interface IProdutoDetalheFotos {
  alt: string;
  href: string;
}

interface IProdutoDetalhe {
  id: string;
  titulo: string;
  subTitulo: string;
  descricao: string;
  fotos: IProdutoDetalheFotos[];
}

const produtos: IProdutoDetalhe[] = [
  {
    id: "rosca",
    titulo: "Rosca Esparramadora",
    subTitulo: "DE PALHA, ESTERCO E COMPOSTOS",
    descricao:
      "A Rosca Esparramadora foi desenvolvida para ser acoplada na carreta de café basculante. Esparrame uma carreta de palha em menos de 3 minutos! A rosca é muito prática de ser instalada e desinstalada, com alguns parafusos apertados ela já está pronta para ser usada! Ela também pode ser acoplada em uma carretinha esparramadeira convencional.",
    fotos: [
      { alt: "rosca-1", href: "rosca-esparramadora/1.png" },
      { alt: "rosca-2", href: "rosca-esparramadora/2.png" },
      { alt: "rosca-3", href: "rosca-esparramadora/3.png" },
      { alt: "rosca-4", href: "rosca-esparramadora/4.png" },
      { alt: "rosca-5", href: "rosca-esparramadora/5.png" },
      { alt: "rosca-6", href: "rosca-esparramadora/6.png" },
    ],
  },
  {
    id: "vassourao",
    titulo: "Vassourão de terreiro",
    subTitulo: "Vassourão de terreiro de café",
    descricao:
      "Com  3 carreiras, o vassourão da Cristo Rei oferece muito mais eficiência e rapidez varrendo o terreiro após amontoar o café. Geralmente, os vassourões oferecidos hoje no mercado contém apenas 2 carreiras, deixando o trabalho mais lento e laborioso. Mas a Cristo Rei chegou para melhorar esse sistema de varreção de terreiro e deixá-lo muito mais prático e rápido!",
    fotos: [
      { alt: "vassourao-1", href: "vassourao/1.png" },
      { alt: "vassourao-2", href: "vassourao/2.png" },
      { alt: "vassourao-3", href: "vassourao/3.png" },
    ],
  },
  {
    id: "pato",
    titulo: "Jogador de Herbicida em café novo",
    subTitulo: "",
    descricao:
      "Luquinha e João Marcos favor, colocar uma descrição desse produto",
    fotos: [
      { alt: "pato-1", href: "pato/1.png" },
      { alt: "pato-2", href: "pato/2.png" },
      { alt: "pato-3", href: "pato/3.png" },
    ],
  },
  {
    id: "silo",
    titulo: "Silo Móvel",
    subTitulo: "PARA CHUPIN DE MÁQUINA DE LIMPAR CAFÉ",
    descricao:
      "Esta é mais uma incrível inovação da Cristo Rei Implementos. O Silo móvel tem uma capacidade de mais de 6.000 litros de café – isso equivale a mais do uma carreta de café cafeeira convencional – fazendo com que o operador precise reabastece-lo somente de 40 em 40 minutos! ",
    fotos: [
      { alt: "silo-1", href: "silo/1.png" },
      { alt: "silo-2", href: "silo/2.png" },
      { alt: "silo-3", href: "silo/3.png" },
      { alt: "silo-3", href: "silo/4.png" },
    ],
  },
];

export default function ProdutoCard() {
  return (
    <div>
      {produtos.map((produto) => (
        <div key={`produto-${produto.id}`} className="flex justify-center mt-5">
          <div className="flex flex-col md:flex-row items-center justify-center w-4/5">
            <div className="md:columns-3 space-y-4 basis-2/3">
              {produto.fotos.map((fotos, index) => (
                <ProdutoCardImagem
                  key={index}
                  alt={fotos.alt}
                  src={fotos.href}
                />
              ))}
            </div>
            <div className="basis-1/3 bg-lime-100 p-5 rounded-md mt-4">
              <h3 className="text-4xl font-sono text-center">
                {produto.titulo}
              </h3>
              <h4 className="font-poppins mx-4 my-4">{produto.subTitulo}</h4>
              <p className="font-poppins text-justify">{produto.descricao}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
