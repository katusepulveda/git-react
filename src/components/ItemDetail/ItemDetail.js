import React from "react";

function ItemDetail({item}){
    return(
        <div>
            <img src={item.img} />
            <div>
                <p>{item.title}</p>
                <p>{item.precio}</p>
                <p>{item.descripcion}</p>
            </div>
        </div>
       
    )
}
export default ItemDetail