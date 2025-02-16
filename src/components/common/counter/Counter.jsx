import { useState } from "react";

const Counter = ({ item }) => {
    
  const [contador, setContador] = useState(1);

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

  };

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button className="btn btn-primary" onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button className="btn btn-primary" onClick={sumar}>+</button>
      </div>
      <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
