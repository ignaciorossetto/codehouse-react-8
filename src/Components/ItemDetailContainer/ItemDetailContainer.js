import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import SpinnerComponent from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../Utilities/firebase/firebase";
import {collection, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const docSnap = async () => {
      const col = collection(db, "products");
      const docRef = doc(col, id);
      const document = await getDoc(docRef);
      setSingleProduct({ ...document.data(), id: document.id });
    };

    docSnap();
  }, [id]);


  return (
    <>
      {singleProduct.length === 0 ? (
        <div className="d-flex justify-content-center">
          <SpinnerComponent />
        </div>
      ) : (
        <div>
          <ItemDetail singleProduct={singleProduct} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
