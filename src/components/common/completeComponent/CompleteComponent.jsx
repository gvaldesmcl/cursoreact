import { useContext,useEffect,useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router";

function CompleteComponent({buyer,items,total}) {    
   

  return (
    <div className="card" style={{marginTop:"20px"}}>
      <div className="card-body">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-sm-offset-3">
              <br></br> <h2 style={{ color: "#0fad00" }}>Orden Procesada</h2>
              <img width={"150px"} src="https://media.istockphoto.com/id/1435212785/es/vector/marcar-la-plantilla-de-dise%C3%B1o-vectorial-del-icono-en-fondo-blanco.jpg?s=612x612&w=0&k=20&c=mh-DeEWOnX8BpeISl6C567N45dzVcqUygm61FMvxAGs=" />
              <h3>Estimado {buyer.nombre}, su orden fue procesada con éxito.<br></br><br></br> Su número de orden es xxxxx</h3><br></br>
              <p style={{ fontSize: "20px", color: "#5C5C5C" }}>Su pedido ha sido registrado y esta en proceso de despacho.<br></br>
Guarde el número de pedido para futuras referencias acerca de su pedido. 
</p>
              <br></br>
              <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteComponent;
