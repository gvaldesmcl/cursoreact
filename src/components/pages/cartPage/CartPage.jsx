
import { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router";
import CartRow from "../../common/cartRow/CartRow";

function CartPage() {

  const { resetCart, cart,  getTotalAmount } = useContext(CartContext);

let total = getTotalAmount();

const emptyCart = () => {
  
  Swal.fire({
    title: "Esta a punto de vaciar su carrito",
    text: "¿Desea Continuar?",
    showCancelButton: true,
    confirmButtonText: "Si",    
    cancelButtonText:  'Cancelar',
    icon: "question"
  }).then((result) => {    
    if (result.isConfirmed) {
      resetCart();
      Swal.fire({
        title: "Carrito vaciado con éxito",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "Aceptar",
        icon: "success",
      });
    }
  });
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
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total Carrito</strong>
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
                  <Link className="btn btn-primary w-100" to={"/checkout"}>
                    Procesar Pedido
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="text-start mb-4">
          <button type="button" className="btn btn-secondary" onClick={emptyCart}><i className="bi bi-trash" ></i> Vaciar Carrito</button>

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