import React, { useContext } from "react";
import NavBar from "./NavBar/NavBar";
import { CartContext } from "../../Context/CartContext/CartContext";
const Header = () => {
    const {freeShipping} = useContext(CartContext)
  return (
    <div style={styles.container}>
      <p style={styles.freeShippingP}>Envios gratis a partir de ${freeShipping.toLocaleString()}</p>
      <h1 style={styles.mainTitle}>Karam Hecho a Mano</h1>
      <NavBar />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/karam-hecho-a-mano-4fe73.appspot.com/o/portada.jpg?alt=media&token=ed906e97-522d-4327-a195-1e45834f140a')`,
    opacity: "1",
    backgroundSize: "cover",
    backgroundPosition: "center 28%",
    marginBottom: "65px",
    borderRadius: "0px",
  },
  freeShippingP: {
    marginTop: "0px",
    alignSelf: "center",
    borderRadius: "0px",
    marginBottom: "0px",
    width: "100%",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.645)",
  },
  mainTitle: {
    width: `fit-content`,
    height: "auto",
    padding: "7px",
    color: "black",
    textAlign: "left",
    marginLeft: "45px",
    marginRight: "45px",
    marginTop: "25px",
    marginBottom: "25px",
    fontWeight: "400",
    fontSize: "50px",
    letterSpacing: "3px",
    backgroundColor: "rgba(255, 255, 255, 0.645)",
    borderRadius: "20px",
  },
};

export default Header;
