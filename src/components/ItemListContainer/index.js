import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import  './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {collection, getDocs } from 'firebase/firestore'
import  db  from '../../Services/firebase';

const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()



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

    const getDataCategory = async (id) =>{
        try {
            const document = collection(db, 'items')
            const col = await getDocs(document)
            const result = col.docs.map((doc) => doc = {id:doc.id, ... doc.data()})
            const resultFilter = result.filter(e=>e.category===id)
            setProducts(resultFilter)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        categoryId?getDataCategory(categoryId):getData()
    }, [categoryId]
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