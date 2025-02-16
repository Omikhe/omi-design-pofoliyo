import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
}

export default function Lightbox({ isOpen, onClose, images }: LightboxProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowRight') {
                setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            } else if (e.key === 'ArrowLeft') {
                setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, images, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl max-h-[90vh] mx-4">
                <button
                    className="absolute top-4 right-4 text-white text-2xl z-20"
                    onClick={onClose}
                >
                    ×
                </button>

                <div className="relative w-full h-[80vh] bg-black/30">
                    {images.length > 0 && (
                        <Image
                            src={images[currentImageIndex]}
                            alt={`Shot ${currentImageIndex + 1}`}
                            layout="fill"
                            objectFit="contain"
                        />
                    )}
                </div>

                {/* Navigation controls */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                    }`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                )}

                {/* Arrow buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl opacity-50 hover:opacity-100"
                            onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                        >
                            ‹
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl opacity-50 hover:opacity-100"
                            onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                        >
                            ›
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}