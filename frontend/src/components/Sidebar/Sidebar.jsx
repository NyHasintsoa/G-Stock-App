import Logo from "../Logo/Logo.jsx";
import { Link } from "react-router";
import SidebarLink from "./SidebarLink.jsx";
import { GrDashboard } from "react-icons/gr";
import { AiOutlineProduct } from "react-icons/ai";

const sidebarLink = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <GrDashboard />
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: <AiOutlineProduct />
  }
];

function Sidebar({ isOpen }) {
  return (
    <>
      <div
        className={
          "hs-overlay [--auto-close:lg] " +
          (isOpen ? "translate-x-0" : "-translate-x-full hidden") +
          " transition-all duration-300 transform w-65 h-full fixed inset-y-0 start-0 z-60 bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700"
        }
      >
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-6 pt-4 flex items-center">
            <Link
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
              to={"/"}
            >
              <Logo />
            </Link>
          </div>

          <div className="h-full overflow-y-auto [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
            <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap">
              <ul className="flex flex-col space-y-1">
                {Array.from(sidebarLink, (link, index) => (
                  <SidebarLink link={link} key={index}>
                    {link.icon}
                  </SidebarLink>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
