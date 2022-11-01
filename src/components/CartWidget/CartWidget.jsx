import "./CartWidget.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);

  return (
    <Link className="cartMain" to={`/cart`}>
      <div>
        <i className="bi bi-cart2" />
        <span className="spanTotal">
          {getTotalItemCount() > 0 && getTotalItemCount()}
        </span>
      </div>
    </Link>
  );
}

export default CartWidget;
