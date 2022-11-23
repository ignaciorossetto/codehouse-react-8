import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [freeShipping, setFreeShipping] = useState(20000);
  const [clientInfo, setClientInfo] = useState({});
  const [deleteItemInfo, setDeleteItemInfo] = useState()
  const [deleteAllItems, setDeleteAllItems] = useState([])
  const [deleteAllCartBool, setDeleteAllCartBool] = useState(false)


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
    updateCartQuantity();
    updateCartTotal();
  }, [cart]);

  const isInCart = (productID) =>
    cart.some(({ product_id }) => product_id === productID);

  const addToCart = (productID, name, price, image, amount, firebaseId) => {
    if (isInCart(productID)) {
      const itemIndex = cart.findIndex(
        (product) => product.product_id === productID
      );

      cart[itemIndex].quantity += amount;
      const cartWithOutAboveItem = cart.filter(
        (product) => product.product_id !== productID
      );
      return setCart([...cartWithOutAboveItem, cart[itemIndex]]);
    } else {
      return setCart([
        ...cart,
        {
          product_id: productID,
          name: name,
          price: price,
          quantity: amount,
          image: image,
          id: firebaseId,
        },
      ]);
    }
  };

  const deleteItem = (productID) => {
    const prodIndex = cart.findIndex(({ product_id }) => {
      return product_id === productID;
    });
    if (prodIndex === -1) {
      return;
    }
    if (cart[prodIndex].quantity === 1) {
      setCart(cart.filter((product) => product.product_id !== productID))
      setDeleteItemInfo(productID)
      return
    } else {
      const incompleteCart = cart.filter(
        (product) => product.product_id !== productID
      );
      cart[prodIndex].quantity--;
    
      setCart([...incompleteCart, cart[prodIndex]]);
      setDeleteItemInfo(productID)
      return

    }
  };
  const deleteCart = () => {
    setDeleteAllCartBool(true)
    setDeleteAllItems([...cart])
    setCart([]);
  };
  const deleteClientInfo = () => {
    setClientInfo([]);
  };

  const updateCartQuantity = () => {
    const initialValue = 0;
    return setCartQuantity(
      cart.reduce((prevval, { quantity }) => prevval + quantity, initialValue)
    );
  };
  const updateCartTotal = () => {
    const initialValue = 0;

    return setCartTotal(
      cart.reduce(
        (prevval, { quantity, price }) => prevval + quantity * price,
        initialValue
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        cartQuantity,
        deleteCart,
        deleteItem,
        cartTotal,
        freeShipping,
        setClientInfo,
        clientInfo,
        deleteClientInfo,
        deleteItemInfo,
        setDeleteItemInfo,
        deleteAllItems,
        setDeleteAllItems,
        setDeleteAllCartBool,
        deleteAllCartBool
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
