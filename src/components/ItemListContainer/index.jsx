import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'
import getData from '../../Services/Data';

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(() =>{
        getData.then((res) => console.log(res))
        .catch((err) => console.log(err))
    
    }, []);

    return (
        <>
            <h2 className='ItemListContainer'>{saludo} 
           <p><ItemCount stock={10} initial={1}/></p> </h2>
           
        </>
    )
}

export default ItemListContainer;