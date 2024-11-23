'use client'
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Counter, Fullscreen } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";

// Define the slide type
export interface Slide {
    src: string;
    title?: string;
    description?: string;
}

interface GalleryProps {
    slides: Slide[];
    columns?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    className?: string;
}

export default function Gallery({
    slides = [], // Provide default empty array
    className = ""
}: GalleryProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [imageIndex, setImageIndex] = useState<number>(0);

    // Guard clause - if no slides, return null or a message
    if (!slides || slides.length === 0) {
        return <div>No images to display</div>;
    }

    const handleImageClick = (index: number) => {
        setImageIndex(index);
        setOpen(true);
    };



    return (
        <div className={`columns-1 sm:columns-3 lg:columns-4 py-10 md:py-20 gap-4 ${className}`}>
            <Lightbox
                className="backdrop-blur-lg"
                plugins={[Captions, Counter, Fullscreen]}
                counter={{ container: { style: { top: "unset", bottom: "0", right: "0", left: "unset" } } }}
                open={open}
                index={imageIndex}
                slides={slides}
                close={() => setOpen(false)}
            />

            {slides.map((slide, index) => (
                <div key={index} className="mb-4 break-inside-avoid">
                    <button onClick={() => handleImageClick(index)} className="w-auto bg-white">
                        <img src={slide.src} alt={slide.title} className="w-full object-cover" />
                    </button>
                </div>
            ))}
        </div>
    );
}