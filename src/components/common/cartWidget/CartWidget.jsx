import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function CartWidgetComponent() {

  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="/cart">
      <span className="navbar-text">
        <FaCartShopping /> Mi Carrito ({total})
      </span>
    </Link>
  );
}
