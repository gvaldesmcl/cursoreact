import { Link } from "react-router";

function ProductCard({id,title,price,stock,category,description,imageUrl}) {
  return (
    <div className="col">        
        <div className="card" style={{width:"5rem;",height:"100%"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-title" style={{fontSize:"0.7em",fontWeight: "bold"}}>{category}</p>
            <p className="card-text" style={{fontSize:"0.8em"}}>{description}</p>
            
        </div>
        <div className="card-footer">
          <Link className="btn btn-primary" to={`/product/${id}`}>Ver</Link>        
        </div>
        </div>
    </div>
  );
}
//<!--a href="#" className="btn btn-primary">Ver</a>
export default ProductCard