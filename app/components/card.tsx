import Image from "next/image";
import Link from 'next/link';

interface CardProps {
    image: string;      // URL or path to the service image
    title: string;      // Title of the service
    year: string; // Availability information for the service
    description: string;
}


export default function Card({ image, title, year, description }: CardProps) {
    return (
        <main className="w-96 h-96 bg-white overflow-hidden rounded-lg relative ">
            <Image
                src={image}
                alt={description}
                layout="fill"
                objectFit="cover"
                // Optional: Add priority for above-the-fold images
                priority
            />

            <div className="bg-black/85 backdrop-blur-lg gap-2 flex flex-col p-5 absolute bottom-0 left-0 w-full">
                <div className="flex justify-between">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <h2>{year}</h2>
                </div>

                <p className="text-xs">{description}</p>
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