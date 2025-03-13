import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <>
      <Toaster position={"top-right"} reverseOrder={false} gutter={10} />
      <Outlet />
    </>
  );
}

export default Layout;
