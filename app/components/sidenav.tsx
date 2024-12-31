'use client'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


import Link from 'next/link';
const socialLinks = [{
    href: "https://x.com/mikemsaka/",
    icon: <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.15308H22.581L14.541 10.3431L24 22.8461H16.594L10.794 15.2621L4.156 22.8461H0.474L9.074 13.0161L0 1.15408H7.594L12.837 8.08608L18.901 1.15308ZM17.61 20.6441H19.649L6.486 3.24008H4.298L17.61 20.6441Z" />
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
    {
        href: "/gallery/posters",
        label: "Design",
        icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4999 9.66665C20.9602 9.66665 21.3333 9.29355 21.3333 8.83331C21.3333 8.37308 20.9602 7.99998 20.4999 7.99998C20.0397 7.99998 19.6666 8.37308 19.6666 8.83331C19.6666 9.29355 20.0397 9.66665 20.4999 9.66665Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M27.1666 16.3333C27.6268 16.3333 27.9999 15.9602 27.9999 15.5C27.9999 15.0397 27.6268 14.6666 27.1666 14.6666C26.7063 14.6666 26.3333 15.0397 26.3333 15.5C26.3333 15.9602 26.7063 16.3333 27.1666 16.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.1666 11.3333C12.6268 11.3333 12.9999 10.9602 12.9999 10.5C12.9999 10.0397 12.6268 9.66665 12.1666 9.66665C11.7063 9.66665 11.3333 10.0397 11.3333 10.5C11.3333 10.9602 11.7063 11.3333 12.1666 11.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.83325 19.6666C9.29349 19.6666 9.66659 19.2935 9.66659 18.8333C9.66659 18.3731 9.29349 18 8.83325 18C8.37301 18 7.99992 18.3731 7.99992 18.8333C7.99992 19.2935 8.37301 19.6666 8.83325 19.6666Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.9999 1.33331C8.83325 1.33331 1.33325 8.83331 1.33325 18C1.33325 27.1666 8.83325 34.6666 17.9999 34.6666C19.5433 34.6666 20.7466 33.4233 20.7466 31.8533C20.7466 31.125 20.4466 30.4616 20.0183 29.9783C19.5349 29.4966 19.2883 28.8916 19.2883 28.1033C19.2819 27.7365 19.3495 27.3722 19.487 27.032C19.6245 26.6919 19.829 26.3829 20.0884 26.1235C20.3478 25.8641 20.6568 25.6595 20.997 25.5221C21.3371 25.3846 21.7014 25.317 22.0683 25.3233H25.3949C30.4799 25.3233 34.6533 21.1516 34.6533 16.0666C34.6083 8.01998 27.1016 1.33331 17.9999 1.33331Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },
    {
        href: "/gallery/logos",
        label: "Web Development",
        icon: <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.9999 21.6667L34.6666 15L27.9999 8.33335M7.99992 8.33335L1.33325 15L7.99992 21.6667M22.1666 1.66669L13.8333 28.3334" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    },
    {
        href: "/gallery/photography",
        label: "Photography",
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.1666 6.66669H15.8333L11.6666 11.6667H6.66659C5.78253 11.6667 4.93468 12.0179 4.30956 12.643C3.68444 13.2681 3.33325 14.116 3.33325 15V30C3.33325 30.8841 3.68444 31.7319 4.30956 32.357C4.93468 32.9822 5.78253 33.3334 6.66659 33.3334H33.3333C34.2173 33.3334 35.0652 32.9822 35.6903 32.357C36.3154 31.7319 36.6666 30.8841 36.6666 30V15C36.6666 14.116 36.3154 13.2681 35.6903 12.643C35.0652 12.0179 34.2173 11.6667 33.3333 11.6667H28.3333L24.1666 6.66669Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.9999 26.6667C22.7613 26.6667 24.9999 24.4281 24.9999 21.6667C24.9999 18.9053 22.7613 16.6667 19.9999 16.6667C17.2385 16.6667 14.9999 18.9053 14.9999 21.6667C14.9999 24.4281 17.2385 26.6667 19.9999 26.6667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },
    {
        href: "/gallery/about",
        label: "About",
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6667 3.33334V6.66668M29.8583 36.6667C29.8583 34.0145 28.8048 31.471 26.9294 29.5956C25.054 27.7202 22.5105 26.6667 19.8583 26.6667C17.2062 26.6667 14.6626 27.7202 12.7873 29.5956C10.9119 31.471 9.85833 34.0145 9.85833 36.6667M13.3333 3.33334V6.66668M26.6667 20C26.6667 23.6819 23.6819 26.6667 20 26.6667C16.3181 26.6667 13.3333 23.6819 13.3333 20C13.3333 16.3181 16.3181 13.3333 20 13.3333C23.6819 13.3333 26.6667 16.3181 26.6667 20ZM8.33333 6.66668H31.6667C33.5076 6.66668 35 8.15906 35 10V33.3333C35 35.1743 33.5076 36.6667 31.6667 36.6667H8.33333C6.49238 36.6667 5 35.1743 5 33.3333V10C5 8.15906 6.49238 6.66668 8.33333 6.66668Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    }
];

export default function Sidenav() {
    const pathname = usePathname();

    return (
        <main className="flex flex-col md:h-full md:py-24 md:px-20 md:w-full p-4">
            <div className="flex flex-col justify-between gap-16">
                <div className="flex items-center w-full">
                    {/* Profile image */}
                    <Image src={"/profile-picture.jpg"} width={64} height={64} alt={"cariculture of mike msaka"} className="flex-shrink-0 w-16 h-16 rounded-full mr-4"></Image>

                    {/* Text content */}
                    <div className="text-left w-full text-nowrap">
                        <h1 className="text-2xl font-bold">Mike Andrew Msaka</h1>
                        <h2 className="text-[#565656]">Graphic designer but I kinda code</h2>
                    </div>
                </div>



                <div className="flex flex-col gap-20 md:w-[295px]">
                    <p className="">
                        I&apos;m a graphic designer who also dabbles in front-end development and amateur photography. I love using my phone to capture moments, especially sunsets, which remind me of life&apos;s balance between chaos and calm.
                    </p>

                    <nav className="flex border-b-2 md:border-none justify-between md:flex-col md:font-semibold gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx("md:border-none md:w-full md:h-[54px] md:gap-4 md:text-[#565656] hover:md:text-[#F2F2F2] md:text-2xl md:font-normal flex items-center justify-start transition-colors duration-300", {
                                    "border-b-2 md:text-[#F2F2F2]": pathname === link.href,
                                },)}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-4">
                        {socialLinks.map(({ href, icon, label }) => (
                            <Link
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#565656] hover:text-[#F2F2F2] transition-colors duration-200"
                                aria-label={label}
                            >
                                {icon}
                            </Link>
                        ))}
                    </div>

                </div>
                <div>

                    <Link href="https://wa.me/265985626249" className="block md:hidden opacity-50 fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full cursor-pointer active:opacity-100">
                        Let&apos;s talk!
                    </Link>
                    <h1 className="text-[#565656] hover:text-[#F2F2F2] transition-colors duration-200">Cooked in Malawi</h1>
                </div>


            </div>
        </main>
    );
}