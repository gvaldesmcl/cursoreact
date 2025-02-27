
import { useContext } from "react";
import { toast } from "sonner";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router";
import CartRow from "../../common/cartRow/CartRow";

function CartPage() {

  const { resetCart, cart, removeById, getTotalAmount } = useContext(CartContext);

let total = getTotalAmount();

const resetCartWithAlert = () => {

};


return (
  <>
  <form>
    <div className="container py-5">
      <h1 className="mb-5">Mi Carrito</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              {cart.length === 0 && <h3>Su carro esta vacio ...</h3>}
              {cart.length > 0 &&
                cart.map((articulo) => {
                  return <CartRow key={articulo.id} {...articulo}></CartRow>;
                })}
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card cart-summary">
            <div className="card-body">
              <h5>Datos de Comprador</h5>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="txtNombre"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+59955555555"
                  required
                />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="card cart-summary">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>
                  {new Intl.NumberFormat("es-CL", {
                    style: "currency",
                    currency: "USD",
                  }).format(total)}
                </span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Impuesto</span>
                <span>US$ 0</span>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-between mb-4">
                <strong>Total a Pagar</strong>
                <strong>
                  {new Intl.NumberFormat("es-CL", {
                    style: "currency",
                    currency: "USD",
                  }).format(total)}
                </strong>
              </div>
              {cart.length === 0 ? (
                <button className="btn btn-primary w-100" disabled>
                  Checkout
                </button>
              ) : (
                <button type="submit" className="btn btn-primary w-100">Checkout</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  </>
);


/*
return (
  <div>
    {cart.map((elemento) => {
      return (
        <div
          key={elemento.id}
          style={{
            margin: "10px",
            width: "200px",
            border: elemento.id === "2" ? "2px solid black" : "2px solid red",
          }}
          classNameName={elemento.id === "2" ? "principal" : "secundario"}
        >
          <h2>{elemento.title}</h2>
          <h2>Cantidad: {elemento.quantity}</h2>
          <h2>Cantidad: {elemento.price}</h2>
          <button name="button" classNameName="btn btn-primary" onClick={() => {
              removeById(elemento.id);
              toast.warning("Producto Eliminado");
            }}>Eliminar</button>
        </div>
      );
    })}

    {cart.length > 0 && <h2>El total a pagar es {total}</h2>}

    <button name="button" classNameName="btn btn-primary" onClick={resetCartWithAlert}>Vaciar</button>

    <button name="button" classNameName="btn btn-primary" onClick={resetCartWithAlert}>Vaciar</button>

    <Link classNameName="btn btn-primary" to="/checkout">Finalizar Compra</Link>

  </div>
);
  */
}

export default CartPage