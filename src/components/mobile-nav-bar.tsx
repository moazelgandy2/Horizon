import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// UI Components
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { sideBarLinks } from "@/lib/data";

// ICONS
import { MenuIcon } from "lucide-react";

export const MobileNavBar = () => {
  const location = useLocation();
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent
            side={"right"}
            className="w-1/2"
          >
            <nav className="flex flex-col justify-center items-center gap-4 text-black w-full">
              <Link
                to={`/`}
                className="flex text-black mb-8 cursor-pointer items-center gap-2"
              >
                <img
                  src="/logo2.png"
                  alt="Logo"
                  className="w-[80px] h-[50px] max-xl:hidden"
                />
                <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1">
                  Horizon
                </h1>
              </Link>
              {sideBarLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive =
                  location.pathname === link.route ||
                  (location.pathname.startsWith(link.route) && link.route !== "/");
                return (
                  <Link
                    className={cn(
                      "flex gap-3 w-full items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start",
                      isActive && "bg-primary",
                      !isActive && "hover:bg-gray-200"
                    )}
                    to={link.route}
                    key={index}
                  >
                    <div className={cn("relative size-6", isActive && "text-white")}>
                      <Icon className="brightness-[3] invert-0" />
                    </div>
                    <p
                      className={cn(
                        "text-16 font-semibold text-black-2 text-black",
                        isActive && "text-white"
                      )}
                    >
                      {link.label}
                    </p>
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
