import Link from 'next/link';

export default function Page() {
    return (
        <main className="h-screen flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-[64px] sm:text-5xl md:text-[64px] font-bold">Omikhe</h1>
                <h2 className="text-[16px] sm:text-base text-gray-500">Graphic Designer</h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                <Link href="https://wa.me/265985626249">WhatsApp</Link>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <Link href="mailto:omikhe265@gmail.com">Email</Link>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <Link href="https://instagram.com/omikhe_">Instagram</Link>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <Link href="https://www.behance.net/mikemsaka">Behance</Link>
            </div>

            <div className="absolute bottom-4 text-sm text-gray-500">
                &#169; 2024 Omikhe
            </div>
        </main>
    );
}