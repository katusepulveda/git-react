import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import './CartItem.css'
import eliminaricono from './img/eliminaricono.png'

const CartItem = ({ name, quantity, price, img, id }) => {
    const { removeOneUnit } = useContext(CartContext)

    return (
        <div className="CartItem-div">
            <img src={img} alt={name} className="img"></img>
            <p className="itemName" >{name}</p>
            <p className="itemCantidad">Cantidad: {quantity} </p>
            <p className="itemPrecio">Precio: {price} </p>
            <button onClick={() => removeOneUnit(id)} className="botonEliminar">
                <img src={eliminaricono}></img>
            </button>
        </div>
    );
};

export default CartItem;