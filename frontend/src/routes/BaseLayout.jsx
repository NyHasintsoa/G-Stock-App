import { Outlet } from "react-router";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu.jsx";
import FooterMenu from "../components/FooterMenu/FooterMenu.jsx";

function BaseLayout() {
  return (
    <div className="min-h-screen">
      <HeaderMenu />
      <main className="min-h-100">
        <Outlet />
      </main>
      <FooterMenu />
    </div>
  );
}

export default BaseLayout;
