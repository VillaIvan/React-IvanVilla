import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo.jsx";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <Link to={"/"} className="nav-link text-light p-3  fs-5">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/category/Remera"}
                  className="nav-link text-light p-3  fs-5"
                >
                  Remeras
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/category/Pantalon"}
                  className="nav-link text-light p-3  fs-5"
                >
                  Pantalones
                </Link>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
