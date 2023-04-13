import Link from "next/link";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-white bg-[#060D13] px-10 md:px-24 py-24">
            <div className={rubik.className + " flex flex-col gap-4 w-full max-w-5xl relative"}>
                <h1 className="font-bold text-5xl relative after:absolute after:top-[calc(100%+.25rem)] after:left-0 after:h-1 after:w-20 after:bg-[#33FF88] after:rounded-sm">Scanlation group</h1>
                <p className="text-lg mt-2">Estamos creando un grupo de scans!</p>
                <div className="my-4">
                    <b>Traduccion</b>: Neki#1587, ivanstro#7731<br/>
                    <b>Editor</b>: ivanstro#7731 (tal vez)<br/>
                </div>
                <p className="text-lg">Si queres ayudar con algo, contactanos!</p>
                <div className="mt-4">
                    <Link href="https://discord.com/users/777338793803513886">
                        <button className="font-bold text-lg py-2 px-8 rounded bg-[#33FF88] text-[#060D13] transition hover:opacity-80">Discord</button>
                    </Link>
                </div>
                <div className="absolute top-0 bottom-0 right-0 left-[50%] hidden lg:flex flex-col items-center justify-center text-8xl font-bold text-white/10">
                    :)
                </div>
            </div>
        </main>
    );
}
