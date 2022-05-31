import React, { useContext } from 'react'
import './CartWidget.css';
import img1 from "./../../components/CartWidget/imagenes/carrito-compra.jpg"
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/CartContextProvider' 

const CartWidget = () => {
    const {totalCount} = useContext(CartContext)    

    return (
        <>
            <Link to='/Cart'>
                <img src={img1} className="shopping-cart" alt='cart' ></img>
                {totalCount()>0 && <button style={{marginBottom: 25, marginRight: 24 }} className='item-cart'>{totalCount()}</button>}
            </Link>
        </>
    )}
    
export default CartWidget;