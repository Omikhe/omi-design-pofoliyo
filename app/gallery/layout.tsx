import Sidenav from "./sidenav";
import '../globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
            <div className="sticky top-0 bg-[#282828] md:w-[495px] flex-none">
                <Sidenav />
            </div>
            <div className="flex-grow md:overflow-y-auto md:pr-[50px] md:pt-[50px]">{children}</div>
        </div>
    );
}