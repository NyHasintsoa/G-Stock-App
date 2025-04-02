import { Navigate, Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import useAuth, { AuthStatus } from "../hooks/useAuth.js";
import { Toaster } from "react-hot-toast";

function AdminLayout() {
  const { status } = useAuth();

  if (status == AuthStatus.Authenticated)
    return (
      <>
        <Toaster position={"top-right"} reverseOrder={false} gutter={10} />
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

  return <Navigate to={"/auth/signin"} />;
}

export default AdminLayout;
