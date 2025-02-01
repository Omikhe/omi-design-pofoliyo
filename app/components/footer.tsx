import { socialLinks } from "./linkz";
import Link from "next/link";

export default function Home() {
    return (
        <main className="p-4 flex flex-col gap-4 text-[#565656]">
            <hr className="border-[#565656]" />
            <div className="flex justify-between">
                <h4>Cooked In Malawi</h4>

                <div className="flex md:flex gap-4">
                    {socialLinks.map(({ href, icon, label }) => (
                        <Link
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="active:text-[#F2F2F2]"
                            aria-label={label}
                        >
                            {icon}
                        </Link>
                    ))}
                </div>
            </div>

        </main>
    );
}
