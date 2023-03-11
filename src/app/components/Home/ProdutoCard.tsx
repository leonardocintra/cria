import ProdutoCardImagem from "./ProdutoCardImagem";

interface ProdutoCardProps {
  titulo: string;
}

export default function ProdutoCard(props: ProdutoCardProps) {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex flex-col md:flex-row items-center justify-center w-4/5">
        <div className="md:columns-3 space-y-4 basis-2/3">
          <ProdutoCardImagem alt="imagem 1" src="rosca-esparramadora/1.png" />
          <ProdutoCardImagem alt="imagem 2" src="rosca-esparramadora/2.png" />
          <ProdutoCardImagem alt="imagem 3" src="rosca-esparramadora/3.png" />
          <ProdutoCardImagem alt="imagem 4" src="rosca-esparramadora/4.png" />
          <ProdutoCardImagem alt="imagem 5" src="rosca-esparramadora/5.png" />
          <ProdutoCardImagem alt="imagem 6" src="rosca-esparramadora/6.png" />
        </div>
        <div className="basis-1/3 bg-lime-100 p-5 rounded-md mt-4">
          <h3 className="text-4xl font-sono text-center">{props.titulo}</h3>
          <h4 className="font-poppins mx-4 my-4">
            DE PALHA, ESTERCO E COMPOSTOS
          </h4>
          <p className="font-poppins text-justify">
            A Rosca Esparramadora foi desenvolvida para ser acoplada na carreta
            de café basculante. Esparrame uma carreta de palha em menos de 3
            minutos! A rosca é muito prática de ser instalada e desinstalada,
            com alguns parafusos apertados ela já está pronta para ser usada!
            Ela também pode ser acoplada em uma carretinha esparramadeira
            convencional.
          </p>
        </div>
      </div>
    </div>
  );
}
