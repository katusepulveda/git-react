import React, { useEffect, useState, useParams } from 'react'
import  './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import getData from '../../Services/Data'
import {collection, getDocs } from 'firebase/firestore'
import  db  from '../../Services/firebase';

const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])

    const getData = async () =>{
        try {
            const document = collection(db, 'items')
            const col = await getDocs(document)
            const result = col.docs.map((doc) => doc = {id:doc.id, ... doc.data()})
            setProducts(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
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