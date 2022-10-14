import React, { useState } from "react";
import FlexWrapper from "../Flexwrapper/Flexwrapper";

export default function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }
  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div>
      <h5>Agrega los items</h5>
      <FlexWrapper>
        <button onClick={handleSubstract}>-</button>
        <strong>{count}</strong>
        <button onClick={handleAdd}>+</button>
      </FlexWrapper>
    </div>
  );
}
