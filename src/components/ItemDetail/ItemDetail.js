import React, { useState, useParams } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
     const { addToCart } = useCartContext()

    const addHandler = ( quantityToAdd) => {
        setCantidadDeProductos(quantityToAdd);
       addToCart(item, quantityToAdd) 

    };


    return(
        <div>
            <img src={item.img} />
            <div>
                <p>{item.title}</p>
                <p>{item.precio}</p>
                <p>{item.descripcion}</p>
                <div>
                
                   {cantidadDeProductos > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount initial={1} stock={item.stock} onAdd={addHandler}/>}

                </div>
            </div>
        </div>
       
    )
}
export default ItemDetail