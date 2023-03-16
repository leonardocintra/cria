import WhatsappButton from "../components/Nav/WhatsappButton";

export default function Contato() {
  return (
    <div className="">
      <main className="flex justify-center items-center flex-col">
        <WhatsappButton />
        <br />
        <div>
          <h2 className="text-3xl font-bold">Email para contato:</h2>
          <h3 className="text-xl font-light p-3">lucas@cria.agr.br</h3>
          <h3 className="text-xl font-light p-3">joaomarcos@cria.agr.br</h3>
        </div>
      </main>
    </div>
  );
}
