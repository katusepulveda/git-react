import React from "react"
import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ name, img , precio, id}) => {
    return (
        
        <div className="contenedor">
        <div className="card">
            <picture>
                <img src={img} alt={id} width="200px"/>
            </picture>
            <p className="namestyle">{name}</p>
            <p>${precio}</p>  
            <Link to ={'/item/' + id}> Ver detalle</Link>

        </div>
        </div> 
    )
}
export default Item