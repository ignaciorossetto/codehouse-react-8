import "./App.css";
import Header from "./Components/Header/Header";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Nosotros from "./Components/Nosotros/Nosotros";
import Contacto from "./Components/Contacto/Contacto";
import Proximamente from "./Components/Proximamente/Proximamente";
import CartProvider from "./Context/CartContext/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products/category/:category"
              element={<ItemListContainer />}
            />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Proximamente />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
