// import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Bars3Icon, ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main className="px-[16px]">
      <header className="w-[375px] h-[72px] lg:w-full lg:mb-[46px">
        <nav className="pt-[8px] flex justify-between lg:flex-col lg:items-center ]">
          <h1 className="text-[24px] font-bold">Omikhe<sup>®</sup></h1>
          <ul className="hidden lg:flex lg:w-[470px] lg:h-[56px] lg:justify-between lg:bg-[#141414] lg:items-center lg:text-[20px] lg:rounded-full">
            <li className="flex justify-center items-center h-[46px] w-[87px] mr-[16px] hover:bg-white hover:text-black rounded-full">Home</li>
            <li className="flex justify-center items-center h-[46px] w-[131px] mr-[16px] hover:bg-white hover:text-black rounded-full"> <div className="flex rounded-full w-[20px] h-[20px] bg-[#C4C4C4] mr-[10px] text-[12px] justify-center items-center">20</div> Projects</li>
            <li className="flex justify-center items-center h-[46px] w-[88px] mr-[16px] hover:bg-white hover:text-black rounded-full">About</li>
            <li className="flex justify-center items-center h-[46px] w-[106px] ml-[5px] hover:bg-white hover:text-black rounded-full">Contact</li>
          </ul>
          <div className="flex flex-col h-[32px] w-[32px]  rounded-full justify-center items-center">
            <Bars3Icon className="w-[24px] h-[24px] text-white md:hidden" />

          </div>


        </nav>
      </header>

      {/* hero section */}
      <div>
        <div className="w-full flex justify-center items-center">

          <h1 className="text-[48px] font-bold leading-tight text-left w-[242px] h-[116px] lg:block">Webistes & Branding</h1>
        </div>
        <div className="w-full flex justify-end items-center">

          <button className="flex p-[8px] rounded-full bg-[#141414] w-[200px] h-[50px] justify-center items-center mt-[16px] mb-[20px]">SCROLL DOWN <ArrowDownIcon className="text-white w-[24px] h-[24px] ml-[5px]" /> </button>
        </div>
        <div className="flex justify-between space-x-10">
          <div className="flex flex-col">

            <h1 className="font-bold text-[20px]">Let&apos;s Talk</h1>
            <h3 className="text-[14px]">omikhe265@gmail.com</h3>

          </div>
          <p className="text-[14px]">Hello, I&apos;m Omikhe, an online product designer focusing on brand identity, advertising, and no-code instruments.</p>
        </div>
      </div>

      {/* projects section */}
      <div>
        <div className="flex justify-between">
          <h1 className="text-[24px] font-medium">Projects</h1>
          <button className="flex text-[14px] font-medium justify-center items-center">More <ArrowRightIcon className="w-[16px] h-[16px] text-white ml-[5px]" /> </button>
        </div>
        <p className="text-[14px] mb-[35px]">As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
        <div className="mb-[49px]">
          <div className="w-[348px] h-[363px] bg-slate-900 rounded-[18.55px] mb-[16px]">
          </div>
          <h1 className="text-[20px] font-medium">Project Name</h1>
          <h2 className="text-[20px]">Project Type</h2>
        </div>

        <div className="mb-[49px]">
          <div className="w-[348px] h-[363px] bg-slate-900 rounded-[18.55px] mb-[16px]">
          </div>
          <h1 className="text-[20px] font-medium">Project Name</h1>
          <h2 className="text-[20px]">Project Type</h2>
        </div>

        <div className="mb-[49px]">
          <div className="w-[348px] h-[363px] bg-slate-900 rounded-[18.55px] mb-[16px]">
          </div>
          <h1 className="text-[20px] font-medium">Project Name</h1>
          <h2 className="text-[20px]">Project Type</h2>
        </div>
      </div>

      {/* Expertise Section */}
      <div>
        <h1 className="text-[24px] font-medium mb-[32px]">Expertise</h1>

        <div className="mb-[32px]">
          <h2 className="text-[20px] font-medium mb-[16px]">Branding</h2>
          <p className="text-[14px] leading-[24px]">Collaborating closely,we will develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

        <div className="mb-[32px]">
          <h2 className="text-[20px] font-medium mb-[16px]">Branding</h2>
          <p className="text-[14px] leading-[24px]">Collaborating closely,we will develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

        <div className="mb-[32px]">
          <h2 className="text-[20px] font-medium mb-[16px]">Branding</h2>
          <p className="text-[14px] leading-[24px]">Collaborating closely,we will develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

        <div className="mb-[32px]">
          <h2 className="text-[20px] font-medium mb-[16px]">Branding</h2>
          <p className="text-[14px] leading-[24px]">Collaborating closely,we will develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

      </div>

      {/* Marquee */}
      <Marquee className="w-[733px] h-[100px] text-[48px] font-medium bg-[#141414] my-[60px]">
        Visual design for digital experiences <div>{" "}</div>
      </Marquee>


      {/* Testmonials Section */}
      <div className="mb-[96px]">
        <h1 className="text-[24px] font-medium mb-[32px]">Testmonials</h1>
        <p className="text-[16px] leading-[24px] mb-[13px]">
          “Omikhe is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I have witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”
        </p>
        <h2 className="text-[14px] font-medium">Chris Ellington</h2>
        <h3 className="text-[14px] leading-[24px]">Product Lead, Gatha</h3>
      </div>

      <footer className="mb-[24px]">
        <div className="flex flex-col justify-center items-center mb-[16px]">
          <h1 className="text-[48px] font-bold mb-[32px]">Let&apos;s talk!</h1>
          <button className="p-[24px] bg-[#141414] rounded-full tex font-medium">omikhe265@gmail.com</button>
        </div>
        <h2 className="mb-[16px]">2023© — Made by Omikhe</h2>
        <ul className="flex justify-between w-[250px]">
          <li>Dribble</li>
          <li>Instagram</li>
          <li>Linkedin</li>
        </ul>
      </footer>
    </main>
  );
}
