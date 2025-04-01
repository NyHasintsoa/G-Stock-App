import { Link } from "react-router";
import { LiaShoppingCartSolid } from "react-icons/lia";
import avatarImg from "../../assets/unknown.jpg";
import { FaPowerOff } from "react-icons/fa6";
import useAuth, { AuthStatus } from "../../hooks/useAuth.js";

function NavbarEnd() {
  const { status, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const isConnected = status === AuthStatus.Authenticated;

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
                  <Link to={"/user/profile"} className="dropdown-item text-sm">
                    Profile
                  </Link>
                  <Link to={"/"} className="dropdown-item text-sm">
                    Account settings
                  </Link>
                  <Link to={"/"} className="dropdown-item text-sm">
                    Subscriptions
                  </Link>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="dropdown-item hover:bg-red-600 hover:text-white text-sm"
                  >
                    <span className="flex items-center gap-x-3">
                      <FaPowerOff />
                      Log out
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to={"/auth/signin"} className="navbar-item">
              Sign In
            </Link>
            <Link to={"/auth/signup"} className="navbar-item">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default NavbarEnd;
