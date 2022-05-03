
const products = [
    {
        id: 1,
        name: "producto1",
        descripcion: "producto 1 descripción",
        precio: "5000",
        stock: "5",
        img:'https://fv9-6.failiem.lv/thumb_show.php?i=krwxudu3f&view'
        
    },
    {
        id: 2,
        name: "producto2",
        descripcion: "producto 2 descripción",
        precio: "4000",
        stock: "6",
        img: 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-product-versions-images%2Fs10-plus-coral-d949c7f6-992d-43c9-8ed9-fff1ef48d5eb.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=f8d52e6b3065a43003981306464d8afa'
    },
    {
        id: 3,
        name: "producto3",
        descripcion: "producto 3 descripción",
        precio: "8000",
        stock: "10",
        img: 'https://home.ripley.cl/store/Attachment/WOP/D191/2000383201900/2000383201900_2.jpg'
    }
]
export const getData = () => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products)
        },5000)
    })
    }


