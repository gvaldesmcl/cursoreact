import { useState } from "react";
import {products} from "../../products.js";
import { useEffect } from "react";
export default function ItemListContainerComponent(props){

const [items,setItems] = useState([]);

//cloudinary.com

useEffect(()=>{

  const getProd = new Promise((resolve,reject) => {

    let permiso = true;
  
    if(permiso){
      resolve(products);
    }else{
      reject({status:400,message:"algo salio mal"});
    }
  
  });
  
  
  getProd.then((respuesta)=>{
  
  setItems(respuesta);
  
  })
  .catch((error)=>{
  
    console.log(error);
  
  });

},[]);


//console.log(items);

items.forEach(x =>{
console.log(x.title);
});



  const {texto} = props;

    return(

<>
<div className="card text-center" style={{marginTop:"20px"}}>
  <div className="card-header">
    Home
  </div>
  <div className="card-body">
    <h5 className="card-title"> {texto}</h5>
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