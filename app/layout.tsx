'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import Sidenav from './components/sidenav';
import Footer from './components/footer';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html className={`h-screen ${inter.className}`}>
      <body className="h-full flex flex-col md:flex-row">
        <div className={`h-auto sticky top-0 bg-[#282828] ${isCollapsed ? 'md:w-20' : 'md:w-96'} flex-none z-50 transition-all duration-300`}>
          <Sidenav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>
        <main className=" min-w-0 h-full overflow-y-auto">
          {children}
        </main>
        <div className="md:hidden block">
          <Footer />
        </div>
      </body>
    </html>
  );
}