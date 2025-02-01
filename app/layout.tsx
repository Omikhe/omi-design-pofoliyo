import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidenav from './components/sidenav';
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Omikhe\'s Pofoliyo',
  description: 'Omikhe\'s graphic design portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`flex h-screen flex-col md:flex-row md:overflow-hidden ${inter.className}`}>
      <body className="flex flex-col md:flex md:flex-row">
        <div className="w-auto h-auto sticky top-0 bg-[#282828] md:w-[495px] flex-none z-50">
          <Sidenav />
        </div>
        <div className="flex-grow md:overflow-y-auto md:pt-[50px]">{children}</div>
        <div className="md:hidden block">
          <Footer />
        </div>
      </body>
    </html>
  );
}