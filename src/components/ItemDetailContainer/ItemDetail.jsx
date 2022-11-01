import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const [count, setCount] = useState(0);
  const { addToCart, removeItem, isInCart } = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(product, count);
    setCount(count);
  }
  if (product)
    return (
      <div className="container d-flex shadow p-3 mb-5 bg-body rounded">
        <div className="img">
          <img src={product.img} alt="imagen" />
        </div>
        <div className="c-detail d-flex flex-column align-items-center">
          <div className="c-content">
            <h2>
              {product.producto} {product.nombre}
            </h2>
            <h4>${product.precio}</h4>
          </div>
          <div className="c-button m-auto"></div>
          {isInCart(product.id) ? (
            <>
              <Link to={`/cart`}>
                <button>Ir al Carrito</button>
              </Link>
              <button onClick={() => removeItem(product.id)}>
                Borrar item
              </button>
            </>
          ) : (
            <ItemCount onAddToCart={handleAddToCart} stock={10} initial={1} />
          )}
        </div>
      </div>
    );

  return <h4> Cargando...</h4>;
}

export default ItemDetail;
