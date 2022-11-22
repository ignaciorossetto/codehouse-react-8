import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../Context/CartContext/CartContext";

const CartSummary = () => {
  const { cart, cartTotal } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "25px",
        width: "25%",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Card.Title style={{ margin: "10px" }}>Total</Card.Title>
        <Card.Body>
          <Card.Text style={{ textAlign: "end" }}>
            ${cartTotal.toLocaleString()}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "15px",
        }}
      >
        {cart.length === 0
          ? ""
          : cart
              .sort((a, b) => a.product_id - b.product_id)
              .map((product) => {
                return (
                  <div
                    key={product.product_id}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "65px",
                        height: "auto",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={`${product.image}`}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <Card.Text>
                        Total {product.name} x {product.quantity} :
                      </Card.Text>
                      <Card.Text>
                        ${(product.quantity * product.price).toLocaleString()}
                      </Card.Text>
                    </Card.Body>
                  </div>
                );
              })}
      </Card>
    </div>
  );
};

export default CartSummary;
