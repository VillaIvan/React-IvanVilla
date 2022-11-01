import "./Item.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function Item(props) {
  const [stock, setStock] = useState(props.stock);

  const imgStyle = {
    filter: !stock ? "grayscale(100%) blur(1px)" : "none",
  };

  function handleItemClick() {
    setStock(!stock);
  }

  return (
    <div onClick={handleItemClick} className="card shadow mb-5 bg-body rounded">
      <div className="card-img">
        <img style={imgStyle} src={props.img} alt="imagen" />
      </div>
      {props.stock === false ? (
        <h3>No disponible</h3>
      ) : (
        <div className="card-detail d-flex row">
          <div className="card-content col-6">
            <h2>
              {props.producto} {props.nombre}
            </h2>
            <h4>${props.precio}</h4>
          </div>

          <div className="card-button m-auto col-6">
            <Link to={`/producto/${props.id}`}>
              <Button title="Detalles" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
