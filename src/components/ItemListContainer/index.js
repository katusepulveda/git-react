import React, { useEffect, useState } from 'react'
import { getData } from '../../Services/Data';
import  './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({saludo}) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getData().then(prods =>{
            setProducts(prods)
        })
    }, []
    )

    return (
        <>
        <div className='ItemListContainer'>
            <h2>{saludo} </h2>
           <ItemList products={products}/>
        </div>    
        </>
    )
    }

export default ItemListContainer;