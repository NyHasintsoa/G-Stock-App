import { Outlet } from "react-router";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

function BaseLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseLayout;
