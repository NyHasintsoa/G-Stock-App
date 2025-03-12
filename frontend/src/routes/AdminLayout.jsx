import { Outlet } from "react-router";
import Header from "../components/Header/Header.jsx";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import { useState } from "react";

function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-50 dark:bg-neutral-900">
        <Header />
        <Breadcrumb setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} />
        <div className="w-full lg:ps-64">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <Outlet />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          style={{ zIndex: 59 }}
          className="hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900/50 dark:bg-neutral-900/80"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
}

export default AdminLayout;
