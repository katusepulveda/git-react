import { createContext, useState } from "react";

const CartContext = createContext({
    products: []
})

export const CartContextProvider = ({ children }) => {
const [cartList, setCartList] = useState([]);

const addProduct = (product) =>{
    setCartList([product, ... cartList])
}

return(
    <CartContext.Provider value={{
        products: cartList,
        addProduct: addProduct
    }}>
        {children}
    </CartContext.Provider>
)

}

export default CartContext