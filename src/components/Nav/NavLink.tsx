import Link from "next/link";

interface NavLinkProps {
  href: string;
  descricao: string;
  icone: JSX.Element;
}

export default function NavLink(props: NavLinkProps) {
  return (
    <>
      <li className="mx-4 my-6 md:my-0 hover:bg-white p-4 rounded-md">
        <Link
          href={props.href}
          className="text-xl hover:text-green-500 duration-300"
        >
          <div className="flex items-center gap-2">
            {props.icone}
            {props.descricao}
          </div>
        </Link>
      </li>
    </>
  );
}
