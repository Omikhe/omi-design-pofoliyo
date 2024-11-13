import Link from 'next/link';
export default function Sidenav() {
    return (
        <main className="flex h-full flex-col px-3 py-4 md:px-2 bg-slate-600">
            <div>
                <h1>Mike Andrew Msaka</h1>
                <p>I stand at the precipice of day and night, my camera a loyal companion in my quest to capture the ineffable. With each sunset I frame, I bear witness to the death and rebirth of possibility—a daily ritual that reminds me that life is a constant interplay of order and chaos.</p>

                <div>
                    <Link href="https://wa.me/265985626249">PHOTOGRAPHY</Link>
                    <Link href="https://wa.me/265985626249">LOGOS</Link>
                    <Link href="https://wa.me/265985626249">POSTER</Link>
                    <Link href="https://wa.me/265985626249">ABOUT</Link>
                </div>
            </div>
        </main>
    );
}