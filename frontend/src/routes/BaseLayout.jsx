import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu.jsx";
import FooterMenu from "../components/FooterMenu/FooterMenu.jsx";

function BaseLayout() {
  return (
    <>
      <Toaster position={"top-right"} reverseOrder={false} gutter={10} />
      <div className="min-h-screen">
        <HeaderMenu />
        <main className="min-h-100">
          <Outlet />
        </main>
        <FooterMenu />
      </div>
    </>
  );
}

export default BaseLayout;
