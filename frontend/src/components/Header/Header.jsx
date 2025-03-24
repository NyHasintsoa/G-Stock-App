import NavbarEnd from "./NavbarEnd.jsx";

function Header() {
  return (
    <>
      <div className="navbar navbar-sticky navbar-glass mt-2 rounded-lg">
        <div className="navbar-start">
          <a className="navbar-item">Ripple UI</a>
        </div>
        <NavbarEnd />
      </div>
    </>
  );
}

export default Header;
