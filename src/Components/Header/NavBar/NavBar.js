import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import Cart from "./Cart/Cart";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.container}>
      <ul style={styles.ul} className="header__nav__menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/nosotros">Nosotros</NavLink>
        </li>
        <li>
          <NavDropdown
            title="Productos"
            id="basic-nav-dropdown"
            style={styles.navdropdown}
          >
              <NavLink to="/products/category/almohadon" className="navlinks">
                <p>Almohadones</p>
              </NavLink>
              <NavLink to="/products/category/bolso" className="navlinks">
                <p>Bolsos</p>
              </NavLink>
              <NavLink to="/products/category/ropadecama" className="navlinks">
                <p>Ropa de cama</p>
              </NavLink>
          </NavDropdown>
        </li>
        <li>
        <NavLink to="/contacto">Contacto</NavLink>
        </li>
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    textAlign: "right",
    padding: "5px 0 5px 0",
    marginLeft: "15px",
    marginRight: "15px",
  },
  ul: {
    width: "auto",
    height: "40px",
    padding: "7px",
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.645)",
    borderRadius: "20px",
  },
  navdropdown: {
    borderRadius: "20px",
  },
};

export default NavBar;
