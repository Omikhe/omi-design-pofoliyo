// import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="px-[16px]">
      <header className="w-[375px] h-[72px]">
        <nav className="p-[16px] flex justify-between">
          <h1 className="text-[24px] font-bold">Omikhe<sup>®</sup></h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="h-[32px] w-[32px] bg-white rounded-full ">

          </div>


        </nav>
      </header>

      {/* hero section */}
      <div >
        <h1 className="text-[48px] font-bold leading-tight text-center">Webistes & Branding</h1>
        <button className="bg-slate-900 p-[8px] rounded-full bg-[#141414]">SCROLL DOWN</button>
        <div className="flex justify-between space-x-10">
          <div className="flex flex-col">

            <h1 className="font-bold text-[20px]">Let's Talk</h1>
            <h3 className="text-[14px]">omikhe265@gmail.com</h3>

          </div>
          <p className="text-[14px]">Hello, I'm Omikhe, an online product designer focusing on brand identity, advertising, and no-code instruments.</p>
        </div>
      </div>

      {/* projects section */}
      <div>
        <div className="flex justify-between">
          <h1 className="text-[24px] font-medium">Projects</h1>
          <button className="text-[14px] font-medium">More</button>
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
          <p className="text-[14px] leading-[24px]">Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

        <div className="mb-[32px]">
          <h2 className="text-[20px] font-medium mb-[16px]">Branding</h2>
          <p className="text-[14px] leading-[24px]">Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

        <div className="mb-[32px]">
          <h2 className="text-[20px] font-medium mb-[16px]">Branding</h2>
          <p className="text-[14px] leading-[24px]">Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

        <div className="mb-[32px]">
          <h2 className="text-[20px] font-medium mb-[16px]">Branding</h2>
          <p className="text-[14px] leading-[24px]">Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
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
          “Omikhe is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”
        </p>
        <h2 className="text-[14px] font-medium">Chris Ellington</h2>
        <h3 className="text-[14px] leading-[24px]">Product Lead, Gatha</h3>
      </div>

      <footer className="mb-[24px]">
        <div className="flex flex-col justify-center items-center mb-[16px]">
          <h1 className="text-[48px] font-bold mb-[32px]">Let's talk!</h1>
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
