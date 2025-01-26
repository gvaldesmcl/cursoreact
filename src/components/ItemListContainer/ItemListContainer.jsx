export default function ItemListContainerComponent(props){

    return(

<>
<div className="card text-center" style={{marginTop:"20px"}}>
  <div className="card-header">
    Home
  </div>
  <div className="card-body">
    <h5 className="card-title"> {props.texto}</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Ver Catálogo</a>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
</>

    );

}