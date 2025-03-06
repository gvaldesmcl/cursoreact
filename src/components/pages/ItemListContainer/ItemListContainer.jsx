import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';

export default function ItemListContainerComponent(props) {

  const [items, setItems] = useState([]);

  const { texto } = props;

  const { category } = useParams();  

  //cloudinary.com
  useEffect(() => {
    const coleccionDeProductos = collection(db, "products");
    let consulta = coleccionDeProductos;

    if (category) {
      const coleccionFiltrada = query(
        coleccionDeProductos,
        where("category", "==", category)
      );
      consulta = coleccionFiltrada;
    }

    const getProducts = getDocs(consulta);

    getProducts.then((res) => {
      let newArray = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setItems(newArray);
    });
  }, [category]);  

  // Setea el texto de inicio
  let textoCategoria = '';

  if(!texto){
    textoCategoria = 'Mostrando productos de tipo '+ category.toUpperCase();
  }else{
    textoCategoria = texto;
  }

  return (
    <>
      <div className="card text-center" style={{ marginTop: "20px" }}>
        <div className="card-header">Inicio</div>
        <div className="card-body">
          <h5 className="card-title"> {textoCategoria}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>

          {items.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className="container">
        <div className="row">
          {items.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </div>
      </div>
      )}




        </div>
      </div>
    </>
  );
}
