import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

function getItem(id) {
    const promesa = new Promise((resolve, reject) => {
        const item = [
            {
                id: 1,
                name: "TABLET YOGA SMART CON GOOGLE ASSISTANT (10.1 64 GB, WIFI)",
                descripcion: "Disfruta de toda la diversión y comodidad de la Tablet Yoga YT-X705F de Lenovo que cuenta con una pantalla táctil con notable resolución. Su potente procesador Qualcomm Snapdragon Octa-Core 439 te brindará una navegabilidad y usabilidad inigualable. Esta genial apuesta de Lenovo destaca además por un sistema operativo Android 9 que te otorgará una óptima navegabilidad.",
                price: "189.990",
                stock: "5",
                category: 'tablet',
                img: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000380259867/2000380259867-2.jpg'

            },
            {
                id: 2,
                name: "MOTOROLA G51 128GB AZUL",
                descripcion: "El Smartphone Moto G51 te dará todo lo que buscas en un teléfono. Entretenimiento sin pausas gracias a su gran batería de 5000mAh, y notable tecnología a la hora de tomar fotografías con su cámara trasera de 50MP + 8MP (Wide & depth) + 2MP (macro) + Flash LED. Con su procesador Qualcomm Snapdragon SM4350-Pro, que se combina con una memoria de 4GB de RAM y un almacenamiento de 128GB, tendrás una gran alternativa para tu conectividad.",
                price: "239.990",
                stock: "6",
                category: 'celular',
                img: 'https://home.ripley.cl/store/Attachment/WOP/D191/2000389148674/2000389148674_2.jpg'
            },
           
            {
                id: 3,
                name: "MOTOROLA MOTO G200 128GB ROM 8GB RAM",
                descripcion: " El Smartphone Moto G200 te dará todo lo que buscas en un teléfono. Entretenimiento sin pausas gracias a su gran batería de 5000mAh, y notable tecnología a la hora de tomar fotografías con su cámara trasera de 50MP + 8MP (Wide & depth) + 2MP (macro) + Flash LED. Con su procesador Qualcomm Snapdragon SM4350-Pro, que se combina con una memoria de 4GB de RAM y un almacenamiento de 128GB, tendrás una gran alternativa para tu conectividad.",
                price: "539.990",
                stock: "10",
                category: 'celular',
                img: 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-product-versions-images%2Fv-840023225826-1-0f76200f-b31a-41d9-bf12-4c7c70e36f1e.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=168a20d7e9999cfac6543b3d374adb1d'
            }
        ];
        const producto = item.filter(item => item.id == id);

        setTimeout(() => {
            resolve(producto[0]);
        }, 1000);
    });

    return promesa;

}


function ItemDetailContainer({ setCartList, cartList }) {
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
            <ItemDetail item={item} setCartList={setCartList} cart={cartList} />
        </div>
    )
}



export default ItemDetailContainer
