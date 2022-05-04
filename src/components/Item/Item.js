import React from "react"
import './Item.css'

const Item = ({ name, img , precio}) => {
    return (
        <div className="card">
            <picture>
                <img src={img} alt={name} width="200px"/>
            </picture>
            <p className="namestyle">{name}</p>
            <p>${precio}</p>
            <button>Ver detalle</button>
        </div>

    )
}
export default Item