import CartWidgetComponent from "../CartWidget/CartWidget";

export default function NavBarComponent(){


    function muestraAlerta(texto){
        console.log(texto);
            alert('Clic desde '+texto.target.innerText);
    }



    return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">PC TRONIX</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" onClick={muestraAlerta} href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={muestraAlerta} href="#">Laptops</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={muestraAlerta} href="#">Tablets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={muestraAlerta} href="#">Gamer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={muestraAlerta} href="#">Impresoras</a>
        </li>
      </ul>

      <CartWidgetComponent/>

      
    </div>
  </div>
</nav>

    );


}