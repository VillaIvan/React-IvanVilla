import React, { useState } from "react";
import FlexWrapper from "../Flexwrapper/Flexwrapper";

export default function ItemCount({ stock, initial, onAddToCart }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }
  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div>
      <h5>Cantidad</h5>
      <FlexWrapper>
        <button onClick={handleSubstract}>-</button>
        <strong>{count}</strong>
        <button onClick={handleAdd}>+</button>
        <button
          onClick={() => {
            onAddToCart(count);
          }}
        >
          🛒
        </button>
      </FlexWrapper>
    </div>
  );
}
