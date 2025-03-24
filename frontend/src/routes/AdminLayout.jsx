import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar.jsx";

function AdminLayout() {
  return (
    <>
      <div className="flex flex-row sm:gap-10">
        <Sidebar />
        <div className="flex w-full flex-col p-4">
          <div className="w-fit">
            <label
              htmlFor="sidebar-mobile-fixed"
              className="btn-primary btn sm:hidden"
            >
              Open Sidebar
            </label>
          </div>
          <div className="my-4 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
