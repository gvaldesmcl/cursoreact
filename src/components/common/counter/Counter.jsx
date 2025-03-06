import { useState,useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";

const Counter = ({ item }) => {
    
  const [contador, setContador] = useState(1);
  
  const { addToCart,cart } = useContext(CartContext);

  const sumar = () => {
    
    if (contador < item.stock) {
      setContador(contador + 1);
    }

  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let objetoParaElCarrito = { ...item, quantity: contador };
    
    addToCart(objetoParaElCarrito);

    toast.success("Producto agregado a carrito", { duration: 5000, closeButton: true });
  };

  return (
    <div>      
      <div className="row text-center">
        <div className="col-1"><button className="btn btn-primary" onClick={restar}>-</button></div>
        <div className="col-1"><h2>{contador}</h2></div>
        <div className="col-1"><button className="btn btn-primary" onClick={sumar}>+</button></div>
        
      </div>
      <div className="row">
        <div className="col-3">
        <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
        </div>
      </div>
</div>

  );
};

export default Counter;
/*{
<div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button className="btn btn-primary" onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button className="btn btn-primary" onClick={sumar}>+</button>
      </div>
      <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
    </div>
}*/