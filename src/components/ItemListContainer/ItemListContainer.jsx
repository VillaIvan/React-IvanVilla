import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getUnProductoByCategory } from "../../mockAPI/mockAPI";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const { categoryID } = useParams();

  useEffect(() => {
    setProductos([]);
    if (categoryID === undefined) {
      getProductos().then((data) => {
        setProductos(data);
      });
    } else {
      getUnProductoByCategory(categoryID).then((data) => {
        setProductos(data);
      });
    }
  }, [categoryID]);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
