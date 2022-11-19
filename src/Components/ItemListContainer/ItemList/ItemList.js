import React from "react";
import Item from "./Item/Item";
import Proximamente from "../../Proximamente/Proximamente";

const ItemList = ({ productList }) => {
  return (
    <>
      {productList.length === 0 ? (
        <div className="d-flex justify-content-center">
          <Proximamente />
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "350px 350px 350px",
            gridTemplateRows: "auto",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {productList.map((product) => {
            return <Item product={product} key={product.product_id} />;
          })}
        </div>
      )}
    </>
  );
};

export default ItemList;
