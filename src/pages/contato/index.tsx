import { BiMailSend } from "react-icons/bi";
import RootLayout from "../layout";

const people = [
  {
    name: "João Marcos Cintra",
    role: "Co-Founder / CEO",
    email: "joaomarcos@cria.agr.br",
    imageUrl: "img/equipe/comarca.jpeg",
  },
  {
    name: "Lucas Carrijo",
    role: "Co-Founder / CEO",
    email: "lucas@cria.agr.br",
    imageUrl: "img/equipe/lucao.jpeg",
  },
  {
    name: "Leonardo Cintra",
    role: "Gerente TI",
    imageUrl: "img/equipe/leonardo.png",
  },
  {
    name: "Marilia Cintra",
    role: "Diretora Comunicação",
    imageUrl: "img/equipe/marilia.jpeg",
  },
  {
    name: "Pedro José Cintra",
    role: "Gerente Agrônomo",
    imageUrl: "img/equipe/lourdes.jpg",
  },
];

export default function Contato() {
  return (
    <RootLayout>
      <div className="bg-amber-100 py-24 sm:py-32 h-screen">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Conheça nossa equipe
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nossa equipe trabalha com comprometimento, colaboração e
              excelência para entregar resultados de qualidade aos nossos
              clientes.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt={person.name}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                    {person.email ? (
                      <div className="flex items-center">
                        <BiMailSend />
                        <p className="pl-2"> {person.email} </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RootLayout>
  );
}
