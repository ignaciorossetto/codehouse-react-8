import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import SpinnerComponent from "../Spinner/Spinner";
import { customFetchByCategory } from "../../Utilities/customFetch";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const products = require("../../Utilities/products.json");

  const [productList, setProductList] = useState([]);
  const [itemListBool, setItemListBool] = useState(false);

  const { category } = useParams();

  useEffect(() => {
    setItemListBool(false);
    customFetchByCategory(products, 2000, category).then((res) => {
      setProductList(res);
      setItemListBool(true);
    });
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
    </>
  );
}

export default ItemListContainer;
