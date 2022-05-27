import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import {doc,  getDoc } from 'firebase/firestore'
import  db  from '../../Services/firebase';
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [cartList, setCartList] = useState()
    const [load, setLoad] = useState(true)

    const getSelected = async (idItem) =>{
        try {
            setLoad(true)
            const document = doc(db, "items", idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ... response.data()}

        setCartList(result)
        setLoad(false)
        } catch (err){
            console.log(err)
        }

    }

    useEffect(() =>{
       getSelected(id)
    }, [id])





    return (
        <div>
            {load ? <Spinner/> : <ItemDetail item={cartList} />}
       </div>
    )
}



export default ItemDetailContainer;
