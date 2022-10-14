import React from "react";
import { useState, useEffect } from "react";
import { getUnProducto } from "../../mockAPI/mockAPI";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUnProducto(id).then((data) => {
      setProduct(data);
    });
  }, [id]);
  return (
    <div>
      <ItemDetail
        id={product.id}
        img={product.img}
        precio={product.precio}
        producto={product.producto}
        nombre={product.nombre}
      />
    </div>
  );
}

export default ItemDetailContainer;
