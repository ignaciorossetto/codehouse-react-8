import React, {createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])
    const [cartQuantity, setCartQuantity] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    const [freeShipping, setFreeShipping] = useState(20000)
    const [clientInfo, setClientInfo] = useState({})



    useEffect(()=>{
        
        localStorage.setItem('cartItems', JSON.stringify(cart))
        updateCartQuantity()
        updateCartTotal()
        
    },[cart])


    const isInCart = (id) => cart.some(({product_id}) => product_id === id)


    const addToCart = (id, name, price, image, amount) => {
        if(isInCart(id)) {
            const itemIndex = cart.findIndex((product) => product.product_id === id)

            cart[itemIndex].quantity += amount
            const cartWithOutAboveItem = cart.filter(product => product.product_id !== id)
            return setCart([...cartWithOutAboveItem, cart[itemIndex]])
        } else {
            return setCart([...cart, {
                'product_id': id,
                'name': name,
                'price': price,
                'quantity': amount,
                'image': image
            }])
        }
    }

    const deleteItem = (id) => {
        const prodIndex = cart.findIndex(({product_id}) => {
            return product_id === id}) 
        if(prodIndex === -1){
            return
        }    
        if(cart[prodIndex].quantity === 1){
            return setCart(cart.filter(product => product.product_id !== id))
        } else {
            const incompleteCart = cart.filter(product => product.product_id !== id)
            cart[prodIndex].quantity--

            return setCart([...incompleteCart, cart[prodIndex]])
        }
    }
    const deleteCart = () => {
        setCart([])
    }

    const updateCartQuantity = () =>{
        const initialValue = 0
        return setCartQuantity(cart.reduce((prevval, {quantity})=> prevval + quantity, initialValue))
    }
    const updateCartTotal = () =>{
        const initialValue = 0
        
        return setCartTotal(cart.reduce((prevval, {quantity, price})=> prevval + (quantity*price), initialValue))
    }


    return (<CartContext.Provider value={{addToCart, cart, cartQuantity, deleteCart, deleteItem, cartTotal, freeShipping, setClientInfo, clientInfo }}>
        {children}
    </CartContext.Provider>)
}

export default CartProvider;

