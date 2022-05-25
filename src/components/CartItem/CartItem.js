import React from "react";

import { useCartContext } from "../../context/CartContextProvider";

const CartItem = ({  name, quantity, price, id }) => {
    const { emptyCart, removeOneUnit} = useCartContext();


    return (
        <div>
            <h1>{name}</h1>
            <p>Cantidad: {quantity} </p>
            <p>Precio: {price} </p>

            <button onClick={() => removeOneUnit(id)}>Eliminar 1</button>
            <button onClick={() => emptyCart(id)}>Eliminar todos</button>

        </div>
    );
};

export default CartItem;