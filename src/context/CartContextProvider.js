import { createContext, useContext, useState } from 'react';

const CartContext = createContext({
  products: [],
  addToCart: () => {},
  removeProduct: () => {},
  isInCart: () => {},
  getCartQuantity: () => {}
});


export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
const [cartList, setCartList] = useState([]);

const IsInCart = (id) => {
    return cartList.some(item => item.id === id)
}


const addToCart = (item, quantity) => {
    if (IsInCart(item.id)) {
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
  
const emptyCart = () => {
setCartList([])
}

const totalCount = () => {
    return cartList.reduce((total, item) => total + item.quantity, 0)
}
 
const totalPrice = () => {
    return cartList.reduce((total,item) => total + item.quantity * item.precio, 0)
}


return (
<CartContext.Provider value={{cartList, IsInCart, addToCart, emptyCart, totalCount, totalPrice}}>
    {children}
</CartContext.Provider>
);
};

export default CartContextProvider;