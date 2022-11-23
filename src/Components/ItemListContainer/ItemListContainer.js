import React, { useState, useEffect, useContext } from "react";
import ItemList from "./ItemList/ItemList";
import SpinnerComponent from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../Utilities/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { CartContext } from "../../Context/CartContext/CartContext";

function ItemListContainer() {

  const {productCopy1} = useContext(CartContext)
  const [productList, setProductList] = useState([]);
  const [itemListBool, setItemListBool] = useState(false);

  const { category } = useParams();

  const q = query(collection(db, 'products'), where('category', '==', category))
  useEffect(() => {
    
    const querySnapShot = async() => {
      let productsCopy = []
      const firestoreProducts = await getDocs(q)
      firestoreProducts.forEach((doc) => {
        productsCopy.push({ ...doc.data(), 'id': doc.id })
      })
      setProductList(productsCopy.sort((a, b)=> a.product_id - b.product_id))
      setItemListBool(true);
    }
    setItemListBool(false);
    querySnapShot()

  }, [category]);

  return (
    <>
      <div>
        {itemListBool ? (
          <ItemList productList={productList} />
        ) : (
          <div className="d-flex justify-content-center">
            <SpinnerComponent />
          </div>
        )}
      </div>
      <button onClick={()=>{console.log(productCopy1)}}>log productCopy</button>
    </>
  );
}

export default ItemListContainer;
