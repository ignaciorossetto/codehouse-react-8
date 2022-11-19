import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { customFetchById } from "../../Utilities/customFetch";
import SpinnerComponent from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const products = require("../../Utilities/products.json");
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    customFetchById(products, 2000, parseInt(id)).then((res) => {
      setSingleProduct(res[0]);
    });
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
