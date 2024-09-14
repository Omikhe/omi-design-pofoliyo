// import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main>
      <header className="w-[375px] h-[72px]">
        <nav className="p-[16px]">
          <h1>Omikhe</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* hero section */}
      <div>
        <h1>Webistes & Branding</h1>
        <button>SCROLL DOWN</button>
        <div>
          <h1>Let's Talk</h1>
          <h3>omikhe265@gmail.com</h3>
          <p>Hello, I'm Omikhe, an online product designer focusing on brand identity, advertising, and no-code instruments.</p>
        </div>
      </div>

      {/* projects section */}
      <div>
        <div>
          <h1>Projects</h1>
          <button>More 2 -></button>
        </div>
        <p>As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
        <div>
          <div className="w-[348px] h-[363px] bg-slate-900 rounded-[18.55px]">
          </div>
          <h1>Project Name</h1>
          <h2>Project Type</h2>
        </div>
      </div>

      {/* Expertise Section */}
      <div>
        <h1>Expertise</h1>

        <div className="">
          <h2>Branding</h2>
          <p>Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

        <div className="">
          <h2>Branding</h2>
          <p>Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

        <div className="">
          <h2>Branding</h2>
          <p>Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

        <div className="">
          <h2>Branding</h2>
          <p>Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
        </div>

      </div>

      {/* Marquee */}
      <Marquee>
        Visual design for digital experiences
      </Marquee>


      {/* Testmonials Section */}
      <div>
        <h1>Testmonials</h1>
        <p>
          “Omikhe is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”
        </p>
        <h2>Chris Ellington</h2>
        <h3>Product Lead, Gatha</h3>
      </div>
      <footer>
        <h1>Let's talk!</h1>
        <button>omikhe265@gmail.com</button>
        <h2>2023 - Made by Omikhe</h2>
        <ul>
          <li>Dribble Instagram LinkedIn</li>
        </ul>
      </footer>
    </main>
  );
}
