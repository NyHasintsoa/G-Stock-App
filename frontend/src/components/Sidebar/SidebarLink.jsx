import { NavLink } from "react-router";

function SidebarLink({ link, children }) {
  return (
    <>
      <li>
        <NavLink
          className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-50 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white"
          to={link.href}
        >
          {children}
          {link.name}
        </NavLink>
      </li>
    </>
  );
}

export default SidebarLink;
