'use client'
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Counter, Fullscreen } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css"
import { slides } from "./slides";

export default function Page() {
    const [open, setOpen] = useState<boolean>(false);

    const [imageIndex, setImageIndex] = useState<number>(0);

    const handleImageClick = (index: number) => {
        setImageIndex(index);
        setOpen(true);
    };

    return (
        <main className="flex flex-col items-center justify-center px-4">
            <div className="columns-1 sm:columns-2 lg:columns-4 py-10 md:py-20 gap-4">
                {/* <button onClick={() => setOpen(true)} className="w-auto bg-slate-400">Open</button> */}

                <Lightbox
                    index={imageIndex}
                    className="backdrop-blur-lg"
                    plugins={[Captions, Counter, Fullscreen]}
                    counter={{ container: { style: { top: "unset", bottom: "0", right: "0", left: "unset" } } }}
                    open={open}
                    slides={slides}
                    close={() => setOpen(false)}
                />

                {slides.map((slide, index) => (
                    <div key={index} className="mb-4 break-inside-avoid">
                        <button onClick={() => handleImageClick(index)} className="w-auto bg-slate-400">
                            <img src={slide.src} alt={slide.title} className="w-full object-cover" />
                        </button>
                    </div>
                ))}

            </div>
        </main>
    );
}