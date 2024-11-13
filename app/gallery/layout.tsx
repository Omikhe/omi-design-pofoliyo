import Sidenav from "./sidenav";
import '../globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
            <div className="md:w-[420px] flex-none bg-slate-400">
                <Sidenav />
            </div>
            <div className="flex-grow md:overflow-y-auto md:pr-[100px] md:pt-[100px]">{children}</div>
        </div>
    );
}