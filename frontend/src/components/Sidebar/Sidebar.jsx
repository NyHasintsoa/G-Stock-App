import { Link } from "react-router";
import { FaAngleDown, FaDisplay, FaPowerOff } from "react-icons/fa6";
import avatarImg from "../../assets/unknown.jpg";
import useAccount from "../../hooks/useAccount.js";
import IconGear from "../icons/IconGear.jsx";
import useAuth from "../../hooks/useAuth.js";
import IconProduct from "../icons/IconProduct.jsx";
import SidebarLink from "./SidebarLink.jsx";

function Sidebar() {
  const { account } = useAccount();
  const { logout } = useAuth();

  return (
    <>
      <div className="sm:w-full sm:max-w-[18rem]">
        <input
          type="checkbox"
          id="sidebar-mobile-fixed"
          className="sidebar-state"
        />
        <label
          htmlFor="sidebar-mobile-fixed"
          className="sidebar-overlay"
        ></label>
        <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
          <section className="sidebar-title items-center p-4">
            <svg
              fill="none"
              height="42"
              viewBox="0 0 32 32"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="100%" rx="16" width="100%"></rect>
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <div className="flex flex-col">
              <span>Acme</span>
              <span className="text-xs font-normal text-content2">
                Team Plan
              </span>
            </div>
          </section>
          <section className="sidebar-content">
            <nav className="menu rounded-md">
              <section className="menu-section px-4">
                <span className="menu-title">Main menu</span>
                <ul className="menu-items">
                  <SidebarLink to={"/admin"}>
                    <FaDisplay />
                    <span>Dashboard</span>
                  </SidebarLink>
                  <li>
                    <input
                      type="checkbox"
                      id="menu-products"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-products"
                    >
                      <div className="flex gap-2">
                        <IconProduct />
                        <span>Catalogue</span>
                      </div>
                      <span className="menu-icon">
                        <FaAngleDown size={15} />
                      </span>
                    </label>
                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <SidebarLink to={"/admin/catalogs/products"} isSubmenu>
                          Produits
                        </SidebarLink>
                        <SidebarLink
                          to={"/admin/catalogs/categories"}
                          isSubmenu
                        >
                          Catégories
                        </SidebarLink>
                        <SidebarLink to={"/admin/catalogs/suppliers"} isSubmenu>
                          Fournisseurs
                        </SidebarLink>
                        <SidebarLink to={"/admin/types/products"} isSubmenu>
                          Types Produit
                        </SidebarLink>
                        <SidebarLink to={"/admin/stock/products"} isSubmenu>
                          Stock
                        </SidebarLink>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
              <div className="divider my-0"></div>
              <section className="menu-section px-4">
                <span className="menu-title">Settings</span>
                <ul className="menu-items">
                  <li className="menu-item">
                    <IconProduct />
                    Products
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="menu-2"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-2"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-75"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                          <path d="M9 7l4 0"></path>
                          <path d="M9 11l4 0"></path>
                        </svg>
                        <span>Contracts</span>
                      </div>

                      <span className="menu-icon">
                        <FaAngleDown size={15} />
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <label className="menu-item ml-6">All contracts</label>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <IconGear />
                    <span>General</span>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
          <section className="sidebar-footer justify-end bg-gray-2 pt-2">
            <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
              <label
                className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
                tabIndex="0"
              >
                <div className="flex flex-row gap-4 p-4">
                  <div className="avatar-square avatar avatar-md">
                    <img src={avatarImg} alt="avatar" />
                  </div>

                  <div className="flex flex-col justify-center font-semibold">
                    <span>{account.username}</span>
                  </div>
                </div>
              </label>
              <div className="dropdown-menu-right-top dropdown-menu ml-2">
                <Link to={"/user/profile"} className="dropdown-item text-sm">
                  Profile
                </Link>
                <a tabIndex="-1" className="dropdown-item text-sm">
                  Account settings
                </a>
                <button
                  className="dropdown-item hover:bg-red-600 hover:text-white text-sm"
                  onClick={() => logout()}
                >
                  <span className="flex items-center gap-x-3">
                    <FaPowerOff />
                    Log out
                  </span>
                </button>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
