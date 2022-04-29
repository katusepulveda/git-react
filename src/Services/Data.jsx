const productos = [
{
    id:1,
    title: "producto1",
    descripcion: "producto 1 descripción",
    precio: "5000",
    stock: "5"
},
{
    id:2,
    title: "producto2",
    descripcion: "producto 2 descripción",
    precio: "4000",
    stock: "6"
},
{
    id:3,
    title: "producto3",
    descripcion: "producto 3 descripción",
    precio: "8000",
    stock: "10"
}
    ]
    const getData = new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(productos);
        },2000);
    } 
    );

    export default getData;