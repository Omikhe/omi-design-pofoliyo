import Sidenav from "./gallery/sidenav";
import Photography from "./gallery/photography/page";

export default function Home() {
return (
  <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
      <div className="md:w-[420px] flex-none">
          <Sidenav />
      </div>
      <div className="flex-grow md:overflow-y-auto md:pr-[50px] md:pt-[50px]">
      <Photography></Photography>

      </div>
  </div>
);
}
