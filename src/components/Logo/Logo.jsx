import "./Logo.css";
import imagenes from "../assets/imagenes";

function Logo() {
  return (
    <div className="logoContainer">
      <a className="navbar-brand" href="#">
        <img src={imagenes.logotipo} alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
