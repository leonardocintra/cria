import { GiFarmTractor } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="flex justify-center pt-5">
      <div className="flex flex-col justify-center text-center mt-3 border-t-2 p-5 w-4/5">
        <div className="flex flex-row items-center justify-center space-x-2 text-2xl font-light">
          <h2>Cristo Rei - Implementos Agrícolas</h2>
          <GiFarmTractor />
          <h3 className="text-sm">Todos os direitos reservados</h3>
        </div>
        <h3 className="font-mono p-4">
          Desenvolvido por Leonardo Nascimento Cintra - 2023
        </h3>
      </div>
    </div>
  );
}
