import Link from "next/link";

export default function Nav() {

    return (
        <div class="bg-blue-950 h-10 p-[1em] flex items-center">
            <Link href='/' class="text-blue-300 font-bold pr-4 hover:underline">
                Home
            </Link>
            <Link href='/questionario' class="text-blue-300 font-bold pr-4 hover:underline">
                Questionário
            </Link>
            <Link href='/calculo' class="text-blue-300 font-bold pr-4 hover:underline">
                Cálculo
            </Link>
            <Link href='/dados' class="text-blue-300 font-bold pr-4 hover:underline">
                Dados
            </Link>
        </div>)
}