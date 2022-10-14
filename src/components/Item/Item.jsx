import "./Item.css";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="card shadow mb-5 bg-body rounded">
      <div className="card-img">
        <img src={props.img} alt="imagen" />
      </div>
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
    </div>
  );
}

export default Item;
