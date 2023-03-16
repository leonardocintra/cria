import IProdutoDetalheFoto from "./IProdutoDetalheFoto";

export default interface IProdutoDetalhe {
  id: number;
  slug: string;
  titulo: string;
  subTitulo: string;
  descricao: string;
  fotos: IProdutoDetalheFoto[];
}
