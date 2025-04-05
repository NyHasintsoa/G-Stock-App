import { NavLink } from "react-router";

function SidebarLink({ to, isSubmenu = false, children }) {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending
            ? `menu-item pending ${isSubmenu ? "ml-6" : ""}`
            : isActive
            ? `menu-item menu-active ${isSubmenu ? "ml-6" : ""}`
            : `menu-item ${isSubmenu ? "ml-6" : ""}`
        }
      >
        {children}
      </NavLink>
    </>
  );
}

export default SidebarLink;
