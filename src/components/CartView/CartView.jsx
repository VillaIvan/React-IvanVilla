import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import FlexWrapper from "../Flexwrapper/Flexwrapper";

function CartView() {
  const { cart, removeItem, clearCart } = useContext(cartContext);
  return (
    <FlexWrapper>
      {cart.map((producto) => (
        <div className="card m-2">
          <h4>
            {producto.producto} {producto.nombre}
          </h4>
          <h4>${producto.precio} x unidad</h4>
          <h4>Cantidad: {producto.count}</h4>
          <h4>Precio Total: ${producto.count * producto.precio}</h4>

          <button onClick={() => removeItem(producto.id)}>Borrar item</button>
        </div>
      ))}
      <div>
        <button onClick={() => clearCart()}>Borrar Carrito</button>
      </div>
    </FlexWrapper>
  );
}

export default CartView;
