import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id)
  }

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
    setCartList([...cartList, { ...item, quantity }]);
  
  };

  const getCartQuantity = () => {
    return cartList.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  const emptyCart = () => {
    setCartList([])
  }

  const totalCount = () => {
    return cartList.reduce((total, item) => total + item.quantity, 0)
  }

 const totalPrice = () => {
    return cartList.reduce((total, item) => total + item.quantity * item.price , 0)
  } 
 
  const deleteById = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const removeOneUnit = (id) => {
    if (unitsPerProduct(id) === 1) {
      return deleteById(id);
    }
    setCartList(
      cartList.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const unitsPerProduct = (id) => {
    const foundInCart = cartList.find((item) => item.id === id);
    return foundInCart ? foundInCart.quantity : 0;
  };

  return (
    <CartContext.Provider value={{ cartList, deleteById, unitsPerProduct, removeOneUnit, getCartQuantity, isInCart, addToCart, emptyCart, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;