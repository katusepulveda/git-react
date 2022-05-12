import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    console.log(count)

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
                <div>
                    <button onClick={Decrease}> - </button>
                    <h3> {count} </h3>
                    <button onClick={Increase}> + </button>
                </div>
                <div>
                <button onClick={() => (count <= stock ) && onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}
export default ItemCount;