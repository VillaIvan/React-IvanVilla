import { useState, useEffect } from "react";

import { getProductos } from "../../mockAPI/mockAPI";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((data) => {
      setProductos(data);
    });
  }, []);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
