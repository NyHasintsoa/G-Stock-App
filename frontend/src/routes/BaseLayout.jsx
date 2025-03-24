import { Outlet } from "react-router";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Cart from "../components/cart/Cart.jsx";

function BaseLayout() {
  return (
    <>
      <Header />
      <div className="mt-28 mx-24">
        <Outlet />
      </div>
      <Footer />
      <Cart />
    </>
  );
}

export default BaseLayout;
