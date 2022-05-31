import React, { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const Increase = () => {
        const newValue = count + 1
        if (newValue <= stock) {
            setCount(newValue);
        }
    }

    const Decrease = () => {
        const newValue = count - 1
        if (newValue >= initial) {
            setCount(newValue)
        }
    }

    return (
        <>
            <div>
                <div className="divContador">
                    <button onClick={Decrease} className="contadorBoton"> - </button>
                    <button className="count"> {count} </button>
                    <button onClick={Increase} className="contadorBoton"> + </button>
                    <button onClick={() => (count <= stock) && onAdd(count)} className="agregar">Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}
export default ItemCount;