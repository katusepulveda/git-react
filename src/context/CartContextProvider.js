import { createContext, useContext, useState } from 'react';

const CartContext = createContext({
  products: [],
  cartList:  () => {},
  addToCart: () => {},
  removeProduct: () => {},
  isInCart: () => {},
  getCartQuantity: () => {}
});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
const [cartList, setCartList] = useState([]);

const isInCart = (id) => {
    return cartList.some(item => item.id === id)
}

const addToCart = (item) => {
  if(!isInCart(item.id)) {
    setCartList([...cartList, item])
} else {
    const newProducts = cartList.map(prod => {
        if(prod.id === item.id) {
            const newProduct = {
                ...prod,
                quantity: item.quantity
            }
            return newProduct
        } else {
            return prod
        }
    })
    setCartList(newProducts)
}
/*     if (IsInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
    setCartList([...cartList, { ...item, quantity }]); */
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
<CartContext.Provider value={{cartList, isInCart, addToCart, emptyCart, totalCount, totalPrice}}>
    {children}
</CartContext.Provider>
);
};

export default CartContextProvider;