import { Link } from "react-router";
import { LiaShoppingCartSolid } from "react-icons/lia";
import avatarImg from "../../assets/unknown.jpg";

function NavbarEnd() {
  const isConnected = false;
  return (
    <>
      <div className="navbar-end">
        <label htmlFor="user-cart-list" className="btn btn-primary">
          <LiaShoppingCartSolid size={25} />
          Panier (50)
        </label>
        <Link to={"/supplier"} className="navbar-item">
          Nos Fournisseur
        </Link>
        {isConnected ? (
          <div className="avatar avatar-ring avatar-md">
            <div className="dropdown-container">
              <div className="dropdown">
                <label
                  className="btn btn-ghost flex cursor-pointer px-0"
                  tabIndex="0"
                >
                  <img src={avatarImg} alt="avatar" />
                </label>
                <div className="dropdown-menu dropdown-menu-bottom-left">
                  <a className="dropdown-item text-sm">Profile</a>
                  <a className="dropdown-item text-sm">Account settings</a>
                  <a className="dropdown-item text-sm">Subscriptions</a>
                  <a className="dropdown-item text-sm">Log out</a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to={"/auth/signin"} className="navbar-item">
              Sign Up
            </Link>
            <Link to={"/auth/signup"} className="navbar-item">
              Sign In
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default NavbarEnd;
