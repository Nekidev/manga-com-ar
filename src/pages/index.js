import Link from "next/link";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-white bg-[#060D13] text-center p-24">
            <div className={rubik.className + " flex flex-col gap-4 items-center"}>
                <h1 className="text-6xl font-bold">Algo muy bueno esta por llegar...</h1>
                <p>Aunque todavia no se que. Si queres que hagamos algo con esta pagina podes mandarme un DM a mi Discord.<br/>Estaba pensando en algo como una pagina para leer manga online en español gratis, pero no estoy seguro todavia.<br/>Preferiria crear un equipo antes de hacer algo, asi que si te interesa mandame un DM.</p>
                <div className="flex flex-row items-center gap-4 mt-4">
                    <Link target="_blank" href="https://discord.com/users/777338793803513886">
                        <button className="bg-[#33FF88] py-4 px-8 leading-none text-lg font-bold text-[#060D13] rounded w-fit hover:opacity-80 transition">Contactame!</button>
                    </Link>
                    <Link target="_blank" href="https://github.com/Nekidev">
                        <button className="text-[#33FF88] py-4 px-8 leading-none text-lg font-bold rounded transition hover:bg-white/10">GitHub</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
