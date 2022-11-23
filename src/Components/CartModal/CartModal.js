import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartModal.css";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";

function CartModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const { cart, deleteCart, deleteItem, cartTotal, freeShipping, deleteAllItems } =
    useContext(CartContext);

  return (
    <>
      <Button variant="primary" className="shopCart" onClick={handleShow}>
        <ShoppingCartIcon />
      </Button>

      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        style={{ width: "100%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {cart.length > 0 ? `Carrito!` : `Carrito Vacio!`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0
            ? ""
            : cart
                .sort((a, b) => a.product_id - b.product_id)
                .map((product) => {
                  return (
                    <Card
                      key={product.product_id}
                      style={{
                        width: "100%",
                        height: "250px",
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "250px",
                          height: "240px",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={`${product.image}`}
                          style={{
                            width: "auto",
                            height: "100%",
                          }}
                        />
                      </div>
                      <Card.Body
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text></Card.Text>
                        <Card.Text>
                          Precio unitario: ${product.price.toLocaleString()}
                        </Card.Text>
                        <Card.Text>Cantidad: {product.quantity}</Card.Text>
                        <Card.Text>
                          Total {product.name}: $
                          {(product.quantity * product.price).toLocaleString()}
                        </Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => deleteItem(product.product_id)}
                        >
                          Eliminar item
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })}
        </Modal.Body>
        <Modal.Body>
          {cartTotal < freeShipping
            ? `TOTAL: $${cartTotal.toLocaleString()}`
            : `TOTAL: $${cartTotal.toLocaleString()} (Envio gratis!!)`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/checkout">
            {cart.length > 0 ? (
              <Button variant="primary" onClick={handleClose}>
                Pagar!
              </Button>
            ) : (
              ""
            )}
          </Link>
          {cart.length > 0 ? (
            <Button variant="primary" onClick={deleteCart}>
              Borrar Carrito!
            </Button>
          ) : (
            ""
          )}
          <button onClick={()=> console.log(deleteAllItems)}>asdsa</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
