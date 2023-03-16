import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <div className="max-w-sm">
      <Link
        href={"https://wa.me/message/I7ZLLKHCHEY3G1"}
        className="flex items-center bg-green-800 text-white duration-300 px-6 py-2 mx-4 hover:bg-red-700 rounded gap-3 justify-center"
      >
        Whatsapp
        <FaWhatsapp className="text-xl" />
      </Link>
    </div>
  );
}
