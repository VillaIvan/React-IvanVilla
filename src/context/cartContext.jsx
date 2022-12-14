import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    let newCart = [...cart];
    let newItem = { ...item, count };
    newCart.push(newItem);
    setCart(newCart);
  }

  function removeItem(idToRemove) {
    let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalItemCount() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function getTotalPrice() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count * itemInCart.precio;
    });
    return total;
  }

  function isInCart(idToCheck) {
    let ask = cart.some((itemInCart) => itemInCart.id === idToCheck);
    return ask;
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        getTotalItemCount,
        removeItem,
        getTotalPrice,
        clearCart,
        isInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };
