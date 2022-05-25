import React from "react";
import { useCartContext } from "../../context/CartContextProvider";
import './CartItem.css'

const CartItem = ({ name, quantity, price, img, id }) => {
    const { emptyCart, removeOneUnit } = useCartContext();

    return (
        <div className="CartItem-div">
            <img src={img} alt={name} className="img"></img>
            <div className="name-cantidad">
                <p className="itemName" >{name}</p>
                <p className="itemCantidad">Cantidad: {quantity} </p>
                <p className="itemPrecio">Precio: {price} </p>
            </div>


            <div>
            {/* <button onClick={() => removeOneUnit(id)}>Eliminar 1</button>
            <button onClick={() => emptyCart(id)}>Eliminar todos</button>
 */}
            </div>
        </div>
    );
};

export default CartItem;