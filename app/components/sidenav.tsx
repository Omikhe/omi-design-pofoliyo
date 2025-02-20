'use client'
import { useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { socialLinks, navLinks } from './linkz';
import { XMarkIcon, Bars3Icon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

interface SidenavProps {
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
}

export default function Sidenav({ isCollapsed, setIsCollapsed }: SidenavProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <main className="flex flex-row justify-between md:flex md:flex-col md:h-full md:py-12 md:px-6 md:w-full p-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col justify-between gap-8">
                <div className={`flex items-center w-full transition-all duration-300 ease-in-out ${isCollapsed ? 'md:justify-center' : ''}`}>
                    {/* Profile image with transition */}
                    <Image src={"/profile-picture.jpg"}
                        width={64}
                        height={64}
                        alt={"Cariculture of Mike Msaka's head"}
                        className={`transition-all duration-300 ease-in-out ${isCollapsed ? 'md:size-8' : 'md:size-16'} size-10 flex-shrink-0 rounded-full mr-4`}
                    />

                    {/* Text content with fade transition */}
                    <div className={`text-left w-full text-nowrap transition-all duration-300 ease-in-out ${isCollapsed
                        ? 'opacity-0 transform translate-x-8 hidden'
                        : 'opacity-100 transform translate-x-0 md:block hidden'
                        }`}>
                        <h1 className="md:text-2xl font-bold transition-transform duration-300">Mike Andrew Msaka</h1>
                        <h2 className="text-[#565656] hidden md:block transition-transform duration-300">Graphic designer but I kinda code</h2>
                    </div>
                </div>

                <div className={`md:flex flex-col gap-20 transition-all duration-300 ease-in-out`}>
                    <p className={`transition-all duration-300 ease-in-out ${isCollapsed ? 'hidden' : 'hidden md:flex'}`}>
                        I&apos;m a graphic designer who also dabbles in front-end development and amateur photography. I love using my phone to capture moments, especially sunsets, which remind me of life&apos;s balance between chaos and calm.
                    </p>

                    <nav className="flex border-b-2 md:border-none justify-between md:flex-col md:font-semibold gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    "md:border-none md:w-full md:h-[54px] md:gap-4 md:text-[#565656] hover:md:text-[#F2F2F2] md:text-2xl md:font-normal flex items-center justify-start transition-all duration-300 ease-in-out transform hover:translate-x-2",
                                    {
                                        "border-b-2 md:text-[#F2F2F2]": pathname === link.href,
                                    }
                                )}
                            >
                                <span className="transition-transform duration-300 ease-in-out">
                                    {link.icon}
                                </span>
                                <span className={`ml-2 transition-all duration-300 ease-in-out ${isCollapsed
                                    ? 'opacity-0 transform translate-x-4 hidden'
                                    : 'opacity-100 transform translate-x-0'
                                    }`}>
                                    {!isCollapsed && link.label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-4 transition-all duration-300 ease-in-out">
                        {socialLinks.map(({ href, icon, label }) => (
                            <Link
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-[#565656] hover:text-[#F2F2F2] transition-all duration-300 ease-in-out transform hover:scale-110 ${isCollapsed ? 'hidden' : 'hidden md:flex'
                                    }`}
                                aria-label={label}
                            >
                                {icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Collapse Button with rotation animation */}
                <button
                    onClick={toggleCollapse}
                    className="hidden md:flex items-center justify-center w-10 h-10 bg-[#282828] rounded-full text-white hover:bg-[#383838] transition-all duration-300 ease-in-out transform hover:scale-105"
                    aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    <div className={`transition-transform duration-300 ease-in-out transform ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}>
                        {isCollapsed ? <ChevronRightIcon className="h-6 w-6" /> : <ChevronLeftIcon className="h-6 w-6" />}
                    </div>
                </button>
            </div>

            {/* Mobile Menu Button with smooth icon transition */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden transition-transform duration-300 ease-in-out hover:scale-105"
                aria-label="Toggle menu"
            >
                <div className="relative w-10 h-10">
                    <Bars3Icon
                        className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-180 scale-95' : 'opacity-100 rotate-0 scale-100'
                            } h-10 w-10 text-white`}
                        strokeWidth={2}
                    />
                </div>
            </button>

            {/* Mobile Navigation Overlay with fade transition */}
            <div
                className={`fixed inset-0 bg-black/20 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } lg:hidden`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Navigation Sliding Menu with smooth slide and fade */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-[#282828] transform transition-all duration-300 ease-in-out 
                ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                shadow-lg z-50 lg:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="transition-transform duration-300 ease-in-out hover:scale-105"
                        aria-label="Close menu"
                    >
                        <XMarkIcon
                            className="h-10 w-10 text-white transition-transform duration-300 ease-in-out"
                            strokeWidth={2}
                        />
                    </button>
                </div>

                {/* Nav Links with stagger effect */}
                <nav className="px-8 pt-8">
                    <div className="flex flex-col space-y-8">
                        {navLinks.map((item, index) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={clsx(
                                    "md:border-none md:w-full md:h-[54px] md:gap-4 text-[#565656] hover:md:text-[#F2F2F2] md:text-2xl md:font-normal flex items-center justify-start transition-all duration-300 ease-in-out transform hover:translate-x-2",
                                    {
                                        "text-[#F2F2F2]": pathname === item.href,
                                    }
                                )}
                                style={{
                                    transitionDelay: `${index * 50}ms`
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </main>
    );
}