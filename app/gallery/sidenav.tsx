import Link from 'next/link';

const navLinks = [
    { href: "./photography", label: "PHOTOGRAPHY" },
    { href: "./logos", label: "LOGOS" },
    { href: "./posters", label: "POSTERS" },
    { href: "./about", label: "ABOUT" }
];

export default function Sidenav() {
    return (
        <main className="flex flex-col md:h-full px-3 py-4 md:pl-[100px] md:pt-[100px] md:w-full">
            <div className="mb-[53px]">
                <h1 className="text-[32px] font-bold mb-[5px]">Mike Andrew Msaka</h1>
                <h2>Graphic designer but I kinda code</h2>
            </div>

            <div className="md:w-[295px]">
                <p className="mb-[88px]">
                    I stand at the precipice of day and night, my camera a loyal companion in my quest to capture the ineffable. With each sunset I frame, I bear witness to the death and rebirth of possibility—a daily ritual that reminds me that life is a constant interplay of order and chaos.
                </p>

                <nav className="flex flex-col hover:text-white">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="md:w-full md:h-[54px] hover:md:bg-black flex items-center justify-start md:p-[16px]"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </main>
    );
}