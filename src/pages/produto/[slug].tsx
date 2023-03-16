import { useRouter } from "next/router";

export default function ProdutoSlug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="">
      <main className="flex justify-center items-center flex-col">
        <br />
        <div>
          <h2 className="text-3xl font-bold">Slug Produto - {slug} </h2>
        </div>
      </main>
    </div>
  );
}
