import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";

function ItemDetail() {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const { title, description, imageUrl, price } = item;

  useEffect(() => {
    let productCollection = collection(db, "products");

    let refDoc = doc(productCollection, id);

    const getProduct = getDoc(refDoc);

    getProduct.then((res) => {

      setItem({ id: res.id, ...res.data() });

    });
  }, [id]);


  return (
    <>
      {Object.keys(item).length === 0 ? (
        <div className="card" style={{ marginTop: "20px" }}>
          <div className="card-body " >
                <div className="text-center">
                    <CircularProgress />
                </div>
            </div>
        </div>
      ) : (
        <div className="card" style={{ marginTop: "20px" }}>
          <div className="card-body">
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <img
                    src={imageUrl}
                    alt="Product"
                    className="img-fluid rounded mb-3 product-image"
                    id="mainImage"
                  />
                </div>

                <div className="col-md-6">
                  <h2 className="mb-3">{title}</h2>
                  {/*<p className="text-muted mb-4">SKU: WH1000XM4</p>*/}
                  <div className="mb-3">
                    <span className="h4 me-2">USD$ {price}</span>
                  </div>

                  <p className="mb-4">{description}</p>

                  <div className="mb-4">
                    <Counter item={item} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
