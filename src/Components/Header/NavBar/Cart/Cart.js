import React, { useContext } from "react";
import "./Cart.css";
import {CartContext} from '../../../../Context/CartContext/CartContext'
import CartModal from "../../../CartModal/CartModal";

function Cart() {
  const {cartQuantity} = useContext(CartContext)


  return (
    <div id="carritoAnchor">
        <CartModal style={{cursor: 'pointer'}}/>
      <p className="carritoCount">{cartQuantity}</p>
    </div>
  );
}

export default Cart;
