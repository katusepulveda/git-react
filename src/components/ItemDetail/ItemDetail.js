import React, { useState, useParams } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import imgEnvio from './img/camion.jpg'

const ItemDetail = ({ item }) => {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    const { addToCart } = useCartContext()
    const addHandler = (quantityToAdd) => {
        setCantidadDeProductos(quantityToAdd);
        addToCart(item, quantityToAdd)
    };

    return (
        <div className="itemDiv">
            <img src={item.img} className="imgStyle" />
            <div>
                <p className="itemStyle">{item.name}</p>
                <p className="descripcionStyle">{item.descripcion}</p>
                <p className="priceStyle">
                    <img src="https://previews.123rf.com/images/alex1618/alex16182002/alex1618200200021/139232644-fair-price-or-trade-color-line-icon-minimum-price-paid-for-certain-products-imported-from-developing.jpg" className="priceItem" />${item.price}
                    <br />
                    <p className="enviosParrafo">
                        <img src={imgEnvio} alt="icono envío" className="iconoEnvio"></img>Envíos a todo Chile
                    </p>
                </p>
                <div>
                    {cantidadDeProductos > 0 ? <Link to='/cart' className="irAlCarrito">Ir al carrito</Link> : <ItemCount initial={1} stock={item.stock} onAdd={addHandler} />}
                </div>
            </div>
        </div>

    )
}
export default ItemDetail