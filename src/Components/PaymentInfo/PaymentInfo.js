import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import CartSummary from "../CartSummary/CartSummary";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import { db } from "../../Utilities/firebase/firebase";
import {
  doc,
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const PaymentInfo = () => {
  const navigate = useNavigate();
  const { clientInfo, cart, cartTotal, deleteClientInfo, deleteCart } =
    useContext(CartContext);
  const handleClick = async (metodopago) => {
    if (metodopago === "transferenciabancaria") {
      const object = {
        clientinfo: { ...clientInfo },
        cart: { ...cart },
        payment: {
          metodo: "transferencia",
          estado: "TRANSFERENCIA A CONFIRMAR",
          timestamp: serverTimestamp(),
        },
      };
      const docRef = await addDoc(collection(db, "ventas1"), object);
      const whatsappMessage = () => {
        let messageString = `
        
        ------ KARAM HECHO A MANO ------
      #ORDEN: ${docRef.id}
      PRODUCTOS:
              `;
        cart.map((product) => {
          return (messageString += `-${product.name} x $${
            product.quantity
          } = $${(product.price * product.quantity).toLocaleString()} 
              `);
        });

        messageString += `
       TOTAL: $${cartTotal.toLocaleString()}
    
       INFORMACION PERSONAL Y DE ENVIO:
      
      - NOMBRE: ${clientInfo.fullname}
      - EMAIL: ${clientInfo.email}
      - CELULAR: ${clientInfo.celphone}
      - DIRECCION: ${clientInfo.address} ${clientInfo.address_number}, ZIP: ${
          clientInfo.zipcode
        }, DEPTO: ${clientInfo.floor}-${clientInfo.apartment}, OTRO:${
          clientInfo.other
        }
      - METODO DE PAGO: TRANSFERENCIA BANCARIA
       `;

        const uriEncodedMessage = encodeURIComponent(messageString);
        return uriEncodedMessage;
      };
      window.open(
        `https://wa.me/5493516330434?text=${whatsappMessage()}`,
        "_blank"
      );
      deleteClientInfo();
      deleteCart();
      decreaseStockFromDB();
      navigate(`/?state=successtr&orderdnr=${docRef.id}`);
      return;
    }
    if (metodopago === "mercadopago") {
      const object = {
        clientinfo: { ...clientInfo },
        cart: { ...cart },
        payment: {
          metodo: "mercadopago",
          estado: "ESPERANDO RESPUESTA DE MERCADOPAGO",
          timestamp: serverTimestamp(),
        },
      };
      const docRef = await addDoc(collection(db, "ventas1"), object);
      deleteClientInfo();
      deleteCart();
      decreaseStockFromDB();
      navigate(`/?state=successmp&orderdnr=${docRef.id}`);
      return;
    }
  };

  const decreaseStockFromDB = async () => {
    cart.forEach(async ({ id, quantity }) => {
      const docRef = doc(db, "products", id);
      await updateDoc(docRef, {
        stock: increment(quantity * -1),
      });
    });
  };

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "50px",
              marginTop: "75px",
            }}
          >
            Error, no hay nada en el carrito!
          </h1>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "end",
              marginBottom: "50px",
              marginRight: "75px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2 style={{ marginRight: "5px" }}>Ir a </h2>
            </Link>
            <Link to="/">
              <HomeIcon fontSize="large" />
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "100px",
              marginTop: "75px",
            }}
          >
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
            <Link to="/checkout">
              <KeyboardBackspaceIcon fontSize="large" />
            </Link>
            <div>
              <h1 style={{ marginBottom: "20px" }}>Forma de pago</h1>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Mercado Pago!</Accordion.Header>
                  <Accordion.Body>
                    <Button onClick={() => handleClick("mercadopago")}>
                      Pagar con MercadoPago!
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{ width: "398px" }}>
                  <Accordion.Header>Transferencia bancaria</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Se redirigira a whatsapp para pasarte los datos bancarios!{" "}
                    </p>
                    {/* <Anchor href={`https://wa.me/5493516330434?text=${whatsappMessage()}`} target='_blank'> */}
                    <Button
                      onClick={() => handleClick("transferenciabancaria")}
                    >
                      Confirmar compra!
                    </Button>
                    {/* </Anchor> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <CartSummary />
          </div>
        </>
      )}
    </>
  );
};

export default PaymentInfo;
