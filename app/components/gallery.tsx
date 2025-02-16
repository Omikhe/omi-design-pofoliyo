'use client'
import React, { useState, useEffect, useCallback, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Counter, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { useInView } from "react-intersection-observer";
import { Loader2, ZoomIn } from "lucide-react";

export interface Slide {
    src: string;
    title?: string;
    description?: string;
    blurDataUrl?: string;  // Base64 blur placeholder
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

const GalleryImage = ({
    slide,
    onClick,
    priority = false
}: {
    slide: Slide;
    index: number;
    onClick: () => void;
    priority?: boolean;
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [error, setError] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const handleImageLoad = () => {
        setIsLoading(false);
        setError(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setError(true);
    };

    return (
        <div
            ref={ref}
            className="relative mb-4 break-inside-avoid overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsPressed(false);
            }}
        >
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                </div>
            )}

            <button
                onClick={onClick}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => setIsPressed(false)}
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={`View ${slide.title || 'image'} in lightbox`}
            >
                {inView && (
                    <img
                        src={slide.src}
                        alt={slide.title || ''}
                        loading={priority ? "eager" : "lazy"}
                        className={`w-full object-cover transition-all duration-300 ease-in-out
                            ${isHovered ? 'scale-105 brightness-90' : 'scale-100'}
                            ${isPressed ? 'scale-95' : ''}
                            ${isLoading ? 'opacity-0' : 'opacity-100'}
                            ${error ? 'filter grayscale' : ''}`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        style={{
                            aspectRatio: '16/9',
                            backgroundImage: slide.blurDataUrl ? `url(${slide.blurDataUrl})` : undefined,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                )}

                {/* Hover Overlay with Zoom Icon */}
                <div className={`absolute inset-0 bg-black/30 flex items-center justify-center
                    transform transition-opacity duration-300 ease-in-out
                    ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <ZoomIn className="w-8 h-8 text-white opacity-75" />
                </div>

                {/* Caption Overlay */}
                {(slide.title || slide.description) && (
                    <div className={`absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm
                        transform transition-all duration-300 ease-in-out
                        ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        {slide.title && (
                            <h3 className="text-white font-medium text-sm">{slide.title}</h3>
                        )}
                        {slide.description && (
                            <p className="text-white/80 text-xs mt-1">{slide.description}</p>
                        )}
                    </div>
                )}

                {error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <p className="text-sm text-gray-500">Failed to load image</p>
                    </div>
                )}
            </button>
        </div>
    );
};

export default function Gallery({
    slides = [],
    className = ""
}: GalleryProps) {
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [isGridView, setIsGridView] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape' && open) {
            setOpen(false);
        }
    }, [open]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    if (!slides?.length) {
        return (
            <div className="text-gray-500 text-center py-8">
                No images to display
            </div>
        );
    }

    const handleImageClick = (index: number) => {
        setImageIndex(index);
        setOpen(true);
    };

    const toggleView = () => {
        setIsGridView(!isGridView);
        if (containerRef.current) {
            containerRef.current.style.opacity = '0';
            setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.style.opacity = '1';
                }
            }, 300);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-end">
                <button
                    onClick={toggleView}
                    className="px-3 py-1 text-sm bg-gray-100 text-black hover:bg-gray-200 rounded-md transition-colors"
                    aria-label={isGridView ? "Switch to list view" : "Switch to grid view"}
                >
                    {isGridView ? "List View" : "Grid View"}
                </button>
            </div>

            <div
                ref={containerRef}
                className={`
                    ${isGridView ? `columns-1 sm:columns-2 lg:columns-3 xl:columns-4` : 'space-y-4'}
                    gap-4 ${className} w-full transition-opacity duration-300
                `}
            >
                <Lightbox
                    className="backdrop-blur-lg"
                    plugins={[Captions, Counter, Fullscreen, Zoom]}
                    counter={{
                        container: {
                            style: {
                                top: "unset",
                                bottom: "0",
                                right: "0",
                                left: "unset",
                                background: "rgba(0, 0, 0, 0.1)",
                                padding: "8px 12px",
                                borderRadius: "4px",
                                margin: "16px"
                            }
                        }
                    }}
                    open={open}
                    index={imageIndex}
                    slides={slides}
                    close={() => setOpen(false)}
                    animation={{ fade: 300 }}
                    carousel={{
                        spacing: 0,
                        padding: 0,
                        imageFit: "contain"
                    }}
                />

                {slides.map((slide, index) => (
                    <GalleryImage
                        key={index}
                        slide={slide}
                        index={index}
                        onClick={() => handleImageClick(index)}
                        priority={index < 4}  // Load first 4 images eagerly
                    />
                ))}
            </div>
        </div>
    );
}