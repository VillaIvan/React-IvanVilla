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
              id={producto.id}
              img={producto.img}
              precio={producto.precio}
              producto={producto.producto}
              nombre={producto.nombre}
            />
          );
        })}
      </Flexwrapper>
    </>
  );
}

export default ItemList;
