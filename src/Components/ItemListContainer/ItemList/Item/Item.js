import React, { useContext,useEffect,useState } from "react";
import Card from "react-bootstrap/Card";
import ItemCounter from "../../../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";
import "./Item.css";
import { CartContext } from "../../../../Context/CartContext/CartContext";

const Item = ({ product }) => {
  const { addToCart, deleteItemInfo, cart, setDeleteItemInfo, deleteAllCartBool, deleteAllItems, setDeleteAllCartBool, setDeleteAllItems } = useContext(CartContext);
  let [sstock , setSstock] = useState(product.stock)
  const handleClickedChild = (value) => {
    addToCart(
      product.product_id,
      product.name,
      product.price,
      product.image,
      value,
      product.id
    );
    setSstock(product.stock -= value)
  };


  useEffect(()=>{
    if(deleteItemInfo === product.product_id){
      setSstock(product.stock += 1)
      setDeleteItemInfo()
    }
    if(deleteAllCartBool === true) {
      const index = deleteAllItems.findIndex(({product_id})=> product_id === product.product_id)
      if(index !== -1){
        const value = deleteAllItems[index].quantity
        setSstock(product.stock += value)
      }
      setDeleteAllCartBool(false)
      setDeleteAllItems([])
    }
  }, [cart])



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "18rem", border: "none" }}>
        <Link to={`/product/${product.id}`}>
          <Card.Img
            className="cardImg"
            variant="top"
            src={product.image}
            style={{
              border: "solid 1px white",
              boxShadow: "-1px 1px 39px 1px rgb(0 0 0 / 84%)",
              WebkitBoxShadow: "-1px 1px 10px 1px rgb(219 219 219 / 84%)",
              MozBoxShadow: "-1px 1px 39px 1px rgba(0, 0, 0, 0.84)",
            }}
          />
        </Link>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>PRECIO: ${product.price.toLocaleString()}</Card.Text>
          <ItemCounter stock={sstock}  handler={handleClickedChild} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
