
const products = [
    {
        id: 1,
        name: 'TABLET YOGA SMART CON GOOGLE ASSISTANT (10.1 64 GB, WIFI)',
        descripcion: "producto 1 descripción",
        price: 189990,
        stock: 5,
        category: 'tablet',
        img:'https://home.ripley.cl/store/Attachment/WOP/D113/2000380259867/2000380259867-2.jpg'
        
    },
    {
        id: 2,
        name: "MOTOROLA G51 128GB AZUL",
        descripcion: "El Smartphone Moto G51 te dará todo lo que buscas en un teléfono. Entretenimiento sin pausas gracias a su gran batería de 5000mAh, y notable tecnología a la hora de tomar fotografías con su cámara trasera de 50MP + 8MP (Wide & depth) + 2MP (macro) + Flash LED. Con su procesador Qualcomm Snapdragon SM4350-Pro, que se combina con una memoria de 4GB de RAM y un almacenamiento de 128GB, tendrás una gran alternativa para tu conectividad.",
        price: 239990,
        stock: 6,
        category: 'celular',
        img: 'https://home.ripley.cl/store/Attachment/WOP/D191/2000389148674/2000389148674_2.jpg'
    },
    {
        id: 3,
        name: "MOTOROLA MOTO G200 128GB ROM 8GB RAM",
        descripcion: "El Smartphone Moto G200 te dará todo lo que buscas en un teléfono. Entretenimiento sin pausas gracias a su gran batería de 5000mAh, y notable tecnología a la hora de tomar fotografías con su cámara trasera de 50MP + 8MP (Wide & depth) + 2MP (macro) + Flash LED. Con su procesador Qualcomm Snapdragon SM4350-Pro, que se combina con una memoria de 4GB de RAM y un almacenamiento de 128GB, tendrás una gran alternativa para tu conectividad.",
        price: 539990,
        stock: 10,
        category: 'celular',
        img: 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-product-versions-images%2Fv-840023225826-1-0f76200f-b31a-41d9-bf12-4c7c70e36f1e.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=168a20d7e9999cfac6543b3d374adb1d'
    },
    {
        id: 4,
        name: "MOTOROLA G20 128GB ROSA",
        descripcion: "El Smartphone Moto G20 te dará todo lo que buscas en un teléfono. Entretenimiento sin pausas gracias a su gran batería de 5000mAh, y notable tecnología a la hora de tomar fotografías con su cámara trasera de 50MP + 8MP (Wide & depth) + 2MP (macro) + Flash LED. Con su procesador Qualcomm Snapdragon SM4350-Pro, que se combina con una memoria de 4GB de RAM y un almacenamiento de 128GB, tendrás una gran alternativa para tu conectividad.",
        price: 249990,
        stock: 6,
        category: 'celular',
        img: 'https://home.ripley.cl/store/Attachment/WOP/D191/2000384580097/2000384580097_2.jpg'
    },
]
export const getData = () => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products)
        },5000)
    })
    }


