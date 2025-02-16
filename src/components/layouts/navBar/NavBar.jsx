import { Link } from "react-router";
import CartWidgetComponent from "../../common/CartWidget/CartWidget";

export default function NavBarComponent(){

    return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >PC TRONIX</Link>    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">          
          <Link className="nav-link active" to="/category/laptops">Laptops</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/category/tablet">Tablets</Link>          
        </li>
        <li className="nav-item">          
          <Link className="nav-link active" to="/category/gamer">Gamer</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/category/impresora">Impresoras</Link>          
        </li>
      </ul>

      <CartWidgetComponent/>

      
    </div>
  </div>
</nav>

    );


}