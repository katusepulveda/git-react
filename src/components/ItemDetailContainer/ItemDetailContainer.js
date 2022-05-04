import React, { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';

function getItem() {
    const promesa = new Promise((resolve, reject) => {
        const item = {
            id: 1,
            title: 'TITULO DE LA IMAGEN 1',
            precio: '8000',
            img: 'https://fv9-6.failiem.lv/thumb_show.php?i=krwxudu3f&view',
            descripcion: 'lo"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore '
        };
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
    return promesa;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
            })
    }, []);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

    export default ItemDetailContainer
