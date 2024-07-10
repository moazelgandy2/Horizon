import { SideBar } from "@/components/side-bar";
import { Outlet } from "react-router-dom";
import { MobileNavBar } from "./components/mobile-nav-bar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="flex h-screen w-full overflow-y-auto">
        <Toaster />
        <SideBar />
        <div className="flex size-full flex-col gap-y-3">
          <div className="flex rounded-b-md shadow h-16 items-center border justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
            <img
              src="/logo.png"
              alt="Menu Logo"
              className="w-[30px] h-[30px]"
            />
            <div className="">
              <MobileNavBar />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;