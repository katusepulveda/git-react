import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

const ItemListContainer = ({ saludo }) => {
    return (
        <>
            <h2 className='ItemListContainer'>{saludo} 
           <p><ItemCount stock={10} initial={1}/></p> </h2>
           
        </>
    )
}

export default ItemListContainer;