import Link from "next/link";

interface NavLinkProps {
  href: string;
  descricao: string;
}

export default function NavLink(props: NavLinkProps) {
  return (
    <>
      <li className="mx-4 my-6 md:my-0">
        <Link
          href={props.href}
          className="text-xl hover:text-green-700 duration-500"
        >
          {props.descricao}
        </Link>
      </li>
    </>
  );
}
