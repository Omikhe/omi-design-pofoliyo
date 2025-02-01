'use client'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { socialLinks, navLinks } from './linkz';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/16/solid';
import { useState } from "react";
import Link from 'next/link';

export default function Sidenav() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <main className="flex flex-row justify-between md:flex md:flex-col md:h-full md:py-24 md:px-20 md:w-full p-4">
            <div className="flex flex-col justify-between gap-16">

                <div className="flex items-center w-full">
                    {/* Profile image */}
                    <Image src={"/profile-picture.jpg"} width={64} height={64} alt={"cariculture of mike msaka"} className="size-10 flex-shrink-0 md:w-16 md:h-16 rounded-full mr-4"></Image>

                    {/* Text content */}
                    <div className="text-left w-full text-nowrap md:block hidden">
                        <h1 className="md:text-2xl font-bold ">Mike Andrew Msaka</h1>
                        <h2 className="text-[#565656] hidden md:block">Graphic designer but I kinda code</h2>
                    </div>
                </div>

                <div className="md:flex flex-col gap-20 hidden">
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
                                className="text-[#565656] hover:text-[#F2F2F2]"
                                aria-label={label}
                            >
                                {icon}
                            </Link>
                        ))}
                    </div>

                </div>


            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
                aria-label="Toggle menu"
            >
                <div className="relative w-10 h-10">
                    <Bars3Icon
                        className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                            } h-10 w-10 text-white`}
                        strokeWidth={2}
                    />
                </div>
            </button>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-black/20 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } lg:hidden`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Navigation Sliding Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-[#282828] transform transition-transform duration-300 ease-in-out 
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                shadow-lg z-50 lg:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <XMarkIcon
                            className="h-10 w-10 text-white"
                            strokeWidth={2}
                        />
                    </button>
                </div>

                <nav className="px-8 pt-8">
                    <div className="flex flex-col space-y-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={clsx("md:border-none md:w-full md:h-[54px] md:gap-4 md:text-[#565656] hover:md:text-[#F2F2F2] md:text-2xl md:font-normal flex items-center justify-start transition-colors duration-300", {
                                    "border-b-2 md:text-[#F2F2F2]": pathname === item.href,
                                },)}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>




            <div className="hidden">

                <Link href="https://wa.me/265985626249" className="opacity-50 fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full cursor-pointer active:opacity-100">
                    Let&apos;s talk!
                </Link>
                <h1 className="text-[#565656] hover:text-[#F2F2F2] transition-colors duration-200">Cooked in Malawi</h1>
            </div>



        </main >
    );
}