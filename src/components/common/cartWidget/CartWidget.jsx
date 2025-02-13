import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";

export default function CartWidgetComponent() {
  return (
    <Link to="/cart">
      <span className="navbar-text">
        <FaCartShopping /> Mi Carrito (0)
      </span>
    </Link>
  );
}
