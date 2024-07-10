import { sideBarLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export const SideBar = () => {
  const location = useLocation();
  return (
    <>
      <section className="sticky self-start left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
        <nav className="flex flex-col justify-center items-center gap-4 text-black">
          <Link
            to={`/`}
            className="flex justify-center text-black mb-8 cursor-pointer items-center gap-2"
          >
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-[80px] h-[50px] max-xl:hidden"
            />
            <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
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
                  isActive && "bg-primary"
                )}
                to={link.route}
                key={index}
              >
                <div className={cn("relative size-6", isActive && "text-white")}>
                  <Icon className="brightness-[3] invert-0" />
                </div>
                <p
                  className={cn(
                    "text-16 font-semibold text-black-2 max-xl:hidden text-black",
                    isActive && "text-white"
                  )}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </nav>
      </section>
    </>
  );
};
