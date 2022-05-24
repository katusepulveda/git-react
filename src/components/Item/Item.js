import React from "react"
import { Link } from "react-router-dom"
import './Item.css'

const item = ({ name, img , price, id}) => {
    return (
        
        <div className="contenedor">
        <div className="card">
            <picture>
                <img src={img} alt={id} width="200px"/>
            </picture>
            <p className="namestyle">{name}</p>
            <p>${price}</p>  
            <Link to ={'/item/' + id}> Ver detalle</Link>

        </div>
        </div> 
    )
}
export default item;