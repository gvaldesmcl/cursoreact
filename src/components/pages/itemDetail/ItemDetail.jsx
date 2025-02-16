import React, { useEffect, useState } from 'react'
import { products } from '../../products';
import { useParams } from 'react-router';
import Counter from '../../common/counter/Counter';

function ItemDetail() {

  const { id } = useParams();  

    const [item,setItem] = useState({});

    useEffect(()=>{

        let producto = products.find((producto)=> producto.id == id);

        setItem(producto);

    },[id]);

    const {title,description,imageUrl,price,stock} = item;

  return (   
<div className="card" style={{marginTop:"20px"}} >
<div className="card-body">
    <div className="container mt-5">
        <div className="row">            
            <div className="col-md-6 mb-4">
                <img src={imageUrl} alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage"/>            
            </div>   
            
            <div className="col-md-6">
                <h2 className="mb-3">{title}</h2>
                {/*<p className="text-muted mb-4">SKU: WH1000XM4</p>*/}
                <div className="mb-3">
                    <span className="h4 me-2">USD$ {price}</span>
                    
                </div>

                <p className="mb-4">{description}</p>

                {/*<div className="mb-4">
                    <h5>Color:</h5>
                    <div className="btn-group" role="group" aria-label="Color selection">
                        <input type="radio" className="btn-check" name="color" id="black" checked/>
                        <label className="btn btn-outline-dark">Black</label>
                        <input type="radio" className="btn-check" name="color" id="silver" />
                        <label className="btn btn-outline-secondary" >Silver</label>
                        <input type="radio" className="btn-check" name="color" id="blue" />
                        <label className="btn btn-outline-primary" >Blue</label>
                    </div>
                </div>*/}

                <div className="mb-4">
                    <Counter item={item}/>                    
                </div>
                {/*
                <button className="btn btn-primary btn-lg mb-3 me-2">
                        <i className="bi bi-cart-plus"></i> Add to Cart
                    </button>
                <button className="btn btn-outline-secondary btn-lg mb-3">
                        <i className="bi bi-heart"></i> Add to Wishlist
                    </button>
                     */}

            </div>
        </div>
    </div> 
  </div>
</div>
  )
}

export default ItemDetail