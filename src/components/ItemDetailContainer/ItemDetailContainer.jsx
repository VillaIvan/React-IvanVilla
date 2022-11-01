import React from "react";
import { useState, useEffect } from "react";
import { getUnProducto } from "../../mockAPI/mockAPI";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [product, setProduct] = useState();
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUnProducto(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log("Catch?");
        setFeedbackMsg(error.message);
      });
  }, [id]);

  return (
    <div>
      {feedbackMsg !== null ? (
        <h4>Error: {feedbackMsg}</h4>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
