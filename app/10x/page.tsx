import Link from 'next/link';

export default function Page() {
    return (
        <main className="h-screen flex flex-col justify-between px-[16px] py-[32px]">
            <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-col items-center mb-[32px]">
                    <h1 className="text-5xl sm:text-6xl font-bold">Omikhe</h1>
                    <h2 className="text-[16px] text-[#878787]">Graphic Designer</h2>
                </div>
                <ul className="flex items-center justify-center gap-4">
                    <li><Link href={'https://wa.me/265985626249'}>WhatsApp</Link></li>
                    <div className="w-[5px] h-[5px] bg-[#878787] rounded-full"></div>
                    <li>Email</li>
                    <div className="w-[5px] h-[5px] bg-[#878787] rounded-full"></div>
                    <li><Link href={'https://instagram.com/omikhe_'}>Instagram</Link></li>
                    <div className="w-[5px] h-[5px] bg-[#878787] rounded-full"></div>
                    <li><Link href={'https://www.behance.net/mikemsaka'}>Behence</Link></li>
                </ul>
            </div>
            <h3 className="text-center text-[#878787]">&#169; 2024 Omikhe</h3>
        </main>
    );
}