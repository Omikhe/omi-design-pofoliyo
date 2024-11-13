export default function page() {
    return (<main className="flex flex-col px-[16px]">

        <div className="flex flex-col justify-center min-h-screen">
            <div className="flex flex-col items-center mb-[32px]">
                <h1 className="text-[64px] font-bold">Omikhe</h1>
                <h2 className="text-[16px] text-[#878787]">Graphic Designer</h2>
            </div>

            <ul className="flex items-center justify-evenly ">
                <li>WhatsApp</li>
                <div className="w-[5px] h-[5px] bg-[#878787] rounded-full"></div>
                <li>Email</li>
                <div className="w-[5px] h-[5px] bg-[#878787] rounded-full"></div>
                <li>Instagram</li>
                <div className="w-[5px] h-[5px] bg-[#878787] rounded-full"></div>
                <li>Behence</li>
            </ul>
        </div>

        <h3 className="">&#169; 2024 Omikhe </h3>
    </main>);
}