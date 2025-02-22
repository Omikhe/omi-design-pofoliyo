import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Lightbox from './lightbox';

interface CardProps {
    image: string;      // URL or path to the service image
    title: string;      // Title of the service
    year: string;       // Availability information for the service
    description: string;
    shots?: string[];   // Array of image URLs for the lightbox
}

export default function Card({ image, title, year, description, shots = [] }: CardProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => {
        if (shots.length > 0) {
            setIsLightboxOpen(true);
        }
    };

    return (
        <>
            <main className="w-96 h-96 bg-white overflow-hidden rounded-lg relative group">
                <Image
                    src={image}
                    alt={description}
                    layout="fill"
                    objectFit="cover"
                    // Optional: Add priority for above-the-fold images
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="gap-2 flex flex-col p-5 absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                    <div className="flex justify-between text-white">
                        <h1 className="text-xl font-semibold">{title}</h1>
                        <h2>{year}</h2>
                    </div>

                    <p className="text-xs text-white">{description}</p>
                    <div className="flex gap-2">
                        <Link href={"#"} className="flex items-center h-8 px-2 py-4 bg-[#F2F2F2] text-black rounded-full text-xs">
                            Case Study
                        </Link>
                        <button
                            onClick={openLightbox}
                            disabled={shots.length === 0}
                            className={`flex items-center h-8 px-2 py-4 border border-[#F2F2F2] text-[#F2F2F2] rounded-full text-xs hover:bg-[#F2F2F2] hover:text-black transition-colors duration-300 ${shots.length === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                                }`}
                        >
                            Shots
                        </button>
                    </div>
                </div>
            </main>

            {shots.length > 0 && (
                <Lightbox
                    isOpen={isLightboxOpen}
                    onClose={() => setIsLightboxOpen(false)}
                    images={shots}
                />
            )}
        </>
    );
}