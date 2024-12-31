import Image from "next/image";
import Link from 'next/link';

interface CardProps {
    image: string;      // URL or path to the service image
    title: string;      // Title of the service
    year: string; // Availability information for the service
    description: string;
}


export default function Card({ image, title, year, description }) {
    return (
        <main className="w-96 h-96 bg-white overflow-hidden rounded-lg relative ">
            <Image
                src={"/branding/valuations-africa.png"}
                alt={"valuations"}
                layout="fill"
                objectFit="cover"
                // Optional: Add priority for above-the-fold images
                priority
            />

            <div className="bg-black/85 backdrop-blur-lg gap-2 flex flex-col p-5 absolute bottom-0 left-0">
                <div className="flex justify-between">
                    <h1 className="text-xl font-semibold">Valuation Africa</h1>
                    <h2>2024</h2>
                </div>

                <p className="text-xs">A unique brand identity for a real estate valuation company, focusing on a professional logo, modern visuals, and consistent branding elements to convey trust and expertise.</p>
                <div className="flex gap-2">
                    <Link href={"#"} className="flex items-center h-8 px-2 py-4 bg-[#F2F2F2] text-black rounded-full text-xs">
                        Case Study
                    </Link>
                    <Link href={"#"} className="flex items-center h-8 px-2 py-4 border border-[#F2F2F2] text-[#F2F2F2] rounded-full text-xs  hover:bg-[#F2F2F2] hover:text-black transition-colors duration-300">
                        Shots
                    </Link>
                </div>
            </div>
        </main>
    );
}