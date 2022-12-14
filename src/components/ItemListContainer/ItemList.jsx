import React from "react";
import Item from "../Item/Item";
import Flexwrapper from "../Flexwrapper/Flexwrapper";

function ItemList(props) {
  return (
    <>
      <Flexwrapper>
        {props.productos.map((producto) => {
          return (
            <Item
              key={producto.id}
              id={producto.id}
              img={producto.img}
              precio={producto.precio}
              producto={producto.producto}
              nombre={producto.nombre}
              stock={producto.stock}
            />
          );
        })}
      </Flexwrapper>
    </>
  );
}

export default ItemList;
