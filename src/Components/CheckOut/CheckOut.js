import React from "react";
import CartSummary from "../CartSummary/CartSummary";
import './CheckOut.css'
import ShippingInfo from "./ShippingInfo/ShippingInfo";

const CheckOut = () => {
  return (
    <>
    <h1 style={{textAlign:'center', marginBottom:'100px'}}>Informacion personal y de envio!</h1>
    <div style={{ margin: "0px 25px", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <ShippingInfo/>
        <CartSummary/>
    </div>
    </>
  );
};

export default CheckOut;
