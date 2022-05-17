import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

function getItem(id) {
    const promesa = new Promise((resolve, reject) => {
        const item = [
            {
                id: 1,
                name: "Tablet",
                descripcion: "producto 1 descripción",
                precio: "5000",
                stock: "5",
                category: 'tablet',
                img:'https://home.ripley.cl/store/Attachment/WOP/D113/2000380259867/2000380259867-2.jpg'
                
            },
            {
                id: 2,
                name: "Celular 1 ",
                descripcion: "producto 2 descripción",
                precio: "4000",
                stock: "6",
                category: 'celular',

                img: 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-product-versions-images%2Fs10-plus-coral-d949c7f6-992d-43c9-8ed9-fff1ef48d5eb.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=f8d52e6b3065a43003981306464d8afa'
            },
            {
                id: 3,
                name: "Celular 2 ",
                descripcion: "producto 3 descripción",
                precio: "8000",
                stock: "10",
                category: 'celular',
                img: 'https://home.ripley.cl/store/Attachment/WOP/D191/2000383201900/2000383201900_2.jpg'
            }
        ];
        const producto = item.filter(item => item.id == id);

        setTimeout(() => {
            resolve(producto[0]);
        }, 1000);
    });
    
    return promesa;

}


function ItemDetailContainer( {setCart, cart }) {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        console.log("se seleccionó ver detalle del item: " + id);
        getItem(id)
            .then(res => {
                setItem(res);
            })
    }, [id]);

    return (
        <div>
            <ItemDetail item={item} setCart={setCart} cart={cart}/>
        </div>
    )
}



    export default ItemDetailContainer
