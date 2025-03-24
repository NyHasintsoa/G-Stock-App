import { Link } from "react-router";
import NavbarEnd from "./NavbarEnd.jsx";

function Header() {
  return (
    <>
      <div className="navbar navbar-sticky navbar-glass mt-2 rounded-lg">
        <div className="navbar-start">
          <Link to={"/"} className="navbar-item">
            Ripple UI
          </Link>
        </div>
        <NavbarEnd />
      </div>
    </>
  );
}

export default Header;
