import React, { useEffect, useState } from 'react'
import { products } from '../../products';

function ItemDetail() {
    
    let id = 3;

    const [item,setItem] = useState({});

    useEffect(()=>{

        let producto = products.find((producto)=> producto.id == id);

        setItem(producto);

    },[id]);

    console.log(item);

  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail