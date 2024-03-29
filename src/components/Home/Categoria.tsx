const callouts = [
  {
    name: "Rosca esparramadora",
    description: "de palha, esterco e compostos.",
    imageSrc: "/img/rosca-esparramadora/1.png",
    imageAlt: "rosca esparramadora",
    href: "/",
  },
  {
    name: "Vassourão de terreiro de café",
    description: "com 3 'carreiras' - Para engatar no trator",
    imageSrc: "/img/vassourao/2.png",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "/",
  },
  {
    name: "Silo Móvel",
    description: "para chupin de máquina de limpar café",
    imageSrc: "/img/silo/1.png",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "/",
  },
];

export default function Categoria() {
  return (
    <div className="bg-[#fcf7ea] rounded-md hidden md:block">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Os mais vendidos</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
