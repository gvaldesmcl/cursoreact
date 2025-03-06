import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CheckoutRow from "../../common/checkoutRow/CheckoutRow";
import CompleteComponent from "../../common/completeComponent/CompleteComponent";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

function CartPage() {

  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [order, setOrder] = useState(null);  

  const [user, setUser] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  let total = getTotalAmount();

  const handleSubmit = (e) => {

    e.preventDefault();

    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let refCollection = collection(db, "orders");

    const promiseResponse = addDoc(refCollection, order);

    promiseResponse.then((res) => {      

      resetCart();      

      order = { id: res.id, ...order };

      setOrder(order);

    });

    let productsCollection = collection(db, "products");

    order.items.forEach((item) => {
      
      let productRef = doc(productsCollection, item.id);

      updateDoc(productRef, { stock: item.stock - item.quantity });
    });
  };

  const handleChange = (e) => {
    
    const { value, name } = e.target;

    setUser({ ...user, [name]: value });
  };

  if (order === null) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="container py-5">
            <h1 className="mb-5">Check Out</h1>
            <div className="row">
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    {cart.length === 0 && <h3>Su carro esta vacio ...</h3>}
                    {cart.length > 0 &&
                      cart.map((articulo) => {
                        return (
                          <CheckoutRow
                            key={articulo.id}
                            {...articulo}
                          ></CheckoutRow>
                        );
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
                        name="nombre"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Correo Electrónico</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="name@example.com"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Teléfono</label>
                      <input
                        type="phone"
                        className="form-control"
                        name="telefono"
                        placeholder="+59955555555"
                        onChange={handleChange}
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
                      <button type="submit" className="btn btn-primary w-100">
                        Procesar Pedido
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  } else {
    return <CompleteComponent {...order} />;
  }

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

export default CartPage;
