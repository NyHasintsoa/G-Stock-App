import { Outlet } from "react-router";
import Header from "../components/Header/Header.jsx";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

function AdminLayout() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900">
      <Header />
      <Breadcrumb />
      <Sidebar />
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
