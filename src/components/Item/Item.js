import React from "react"
import { Link } from "react-router-dom"
import './Item.css'

const item = ({ name, img, price, id }) => {
    return (

        <div className="contenedor">
            <div className="card">
                <picture>
                    <img src={img} alt={id} width="200px" />
                </picture>
                <p className="nameStyle">{name}</p>
                <p>${price}</p>
                <div>
                    <Link to={'/item/' + id} className="botonDetalle"> Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}
export default item;