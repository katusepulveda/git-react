import React from "react";

import { useCartContext } from "../../context/CartContextProvider";

const CartItem = ({ id, name, quantity, price }) => {
    const { emptyCart, removeOneUnit } = useCartContext();

    return (
        <div>
            <h1>{name}</h1>
            <h4>Unidades: {quantity}</h4>

            <button onClick={() => removeOneUnit(id)}>Eliminar 1</button>
            <button onClick={() => emptyCart(id)}>Eliminar todos</button>

        </div>
    );
};

export default CartItem;