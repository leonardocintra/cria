import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { JSX, SVGProps } from "react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Component() {
  return (
    <div key="1" className="mx-auto max-w-6xl px-4 py-6 grid items-start gap-4">
      <div className="grid md:grid-cols-2 items-start gap-4">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold leading-tight">
            Máquina de Colheita Automática
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <StarIcon className="w-4 h-4 fill-primary" />
            <StarIcon className="w-4 h-4 fill-primary" />
            <StarIcon className="w-4 h-4 fill-primary" />
            <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
            <span className="text-sm font-medium tracking-wider">
              5 reviews
            </span>
          </div>
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="description">
              Description
            </Label>
            <div className="prose [& > *]:first-child:mt-0" id="description">
              <p>
                Essa maquina é muito util para fazer isso isso e aquilo. João
                Marcos e Lucao descrever melhor Essa maquina é muito util para
                fazer isso isso e aquilo. João Marcos e Lucao descrever melhor
                Essa maquina é muito util para fazer isso isso e aquilo. João
                Marcos e Lucao descrever melhor Essa maquina é muito util para
                fazer isso isso e aquilo. João Marcos e Lucao descrever melhor
              </p>
              <p>
                Essa maquina é muito util para fazer isso isso e aquilo. João
                Marcos e Lucao descrever melhorEssa maquina é muito util para
                fazer isso isso e aquilo. João Marcos e Lucao descrever
                melhorEssa maquina é muito util para fazer isso isso e aquilo.
                João Marcos e Lucao descrever melhorEssa maquina é muito util
                para fazer isso isso e aquilo. João Marcos e Lucao descrever
                melhorEssa maquina é muito util para fazer isso isso e aquilo.
                João Marcos e Lucao descrever melhor
              </p>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-1" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-2">
            <div>
              <h2 className="text-lg font-bold tracking-wide uppercase">
                Features
              </h2>
              <ul className="list-disc list-inside grid gap-2 text-sm">
                <li>Automated Harvesting</li>
                <li>Precision Sorting</li>
                <li>Intuitive Interface</li>
                <li>Customizable Settings</li>
                <li>Compact Design</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-2">
            <div>
              <h2 className="text-lg font-bold tracking-wide uppercase">
                Especificações
              </h2>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="border border-gray-200 rounded-lg p-4 grid gap-4 dark:border-gray-800 justify-center">
          <Image
            alt="Image"
            className="rounded-lg overflow-hidden"
            height={500}
            src="https://res.cloudinary.com/rexhelicoides/image/upload/v1712963050/pato/1_gysb67.png"
            width={800}
          />
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
