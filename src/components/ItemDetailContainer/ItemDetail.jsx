import "./ItemDetail.css";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
  return (
    <div className="container d-flex shadow p-3 mb-5 bg-body rounded">
      <div className="img">
        <img src={props.img} alt="imagen" />
      </div>
      <div className="c-detail d-flex flex-column align-items-center">
        <div className="c-content">
          <h2>
            {props.producto} {props.nombre}
          </h2>
          <h4>${props.precio}</h4>
        </div>
        <div className="c-button m-auto ">
          <Button title="🛒" />
        </div>
        <ItemCount stock={10} initial={0} />
      </div>
    </div>
  );
}

export default ItemDetail;
