'use client'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';


import Link from 'next/link';
const socialLinks = [{
    href: "https://x.com/mikemsaka/",
    icon: <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.15308H22.581L14.541 10.3431L24 22.8461H16.594L10.794 15.2621L4.156 22.8461H0.474L9.074 13.0161L0 1.15408H7.594L12.837 8.08608L18.901 1.15308ZM17.61 20.6441H19.649L6.486 3.24008H4.298L17.61 20.6441Z" fill="black" />
    </svg>,
    label: "X"
},
{
    href: "https://www.pinterest.com/omikhe_/",
    icon: <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.217-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>,
    label: "Pinterest"
},
{
    href: "https://github.com/omikhe",
    icon: <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>,
    label: "Github"
},
{
    href: "https://instagram.com/omikhe_",
    icon: <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>,
    label: "Instagram"
}
];

const navLinks = [
    { href: "/gallery/photography", label: "PHOTOGRAPHY" },
    { href: "/gallery/logos", label: "LOGOS" },
    { href: "/gallery/posters", label: "FLYERS & POSTERS" },
    { href: "/gallery/about", label: "ABOUT" }
];

export default function Sidenav() {
    const pathname = usePathname();

    return (
        <main className="flex flex-col md:h-full px-3 py-4 md:pl-[50px] md:pt-[50px] md:w-full">
            <div className="md:mb-[53px] md:w-full">
                <h1 className="md:text-[32px] md:font-bold mb-[5px]">Mike Andrew Msaka</h1>
                <h2>Graphic designer but I kinda code</h2>
            </div>

            <div className="md:w-[295px]">
                <p className="mb-[88px]">
                    I stand at the precipice of day and night, my camera a loyal companion in my quest to capture the ineffable. With each sunset I frame, I bear witness to the death and rebirth of possibility—a daily ritual that reminds me that life is a constant interplay of order and chaos.
                </p>

                <nav className="flex flex-col  md:mb-[160px] md:font-semibold">
                    {navLinks.map((link) => (
                        <Link

                            key={link.href}
                            href={link.href}
                            className={clsx("md:w-full md:h-[54px] hover:md:bg-black hover:md:text-white flex items-center justify-start md:p-[16px] transition-colors duration-300", {
                                "md:bg-black md:text-white": pathname === link.href,
                            },)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>


                <div className="flex gap-4 md:mb-[88px]">
                    {socialLinks.map(({ href, icon, label }) => (
                        <Link
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-600 transition-colors duration-200"
                            aria-label={label}
                        >
                            {icon}
                        </Link>
                    ))}
                </div>
            </div>
            <h1 className="mt-[16px] mb-[16px]">Cooked in Malawi</h1>


        </main>
    );
}