import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import CartSummary from "../CartSummary/CartSummary";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

const PaymentInfo = () => {
  const { clientInfo } = useContext(CartContext);
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "100px" }}>
        Elegi el metodo de pago
      </h1>
      <div
        style={{
          margin: "0px 25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "20px" }}>Forma de pago</h1>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Mercado Pago!</Accordion.Header>
              <Accordion.Body>
                <Button>Pagar con MercadoPago!</Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={{ width: "398px" }}>
              <Accordion.Header>Transferencia bancaria</Accordion.Header>
              <Accordion.Body>
                <p>Te llegaran los datos de la cuenta bancaria al e-mail</p>
                <Button>Confirmar compra!</Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <CartSummary />
      </div>
    </>
  );
};

export default PaymentInfo;
