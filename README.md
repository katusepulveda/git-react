# Ecommerce para el curso de React

Esta web es un sitio para una tienda de celulares y tablets. Proyecto creado para el curso de React de CoderHouse.

## Dependencias utilizadas:

react-router-dom: Routing en el browser

react-firebase: Base de datos

## Rutas:

El proyecto tiene establecidas sus rutas en App.js, que son:

'/' ItemListContainer -  Home del sitio web

'/home' ItemListContainer - Home del sitio web

'/category/:categoryId' - Dirige a cada una de las categorias del sitio: tablet, celulares

'/item/:id' ItemDetailContainer - Dirige al detalle de cada item, aquí podemos ver descripción, precio y otros.

'/contacto' - Información de contacto

'/cart' Cart - Dirige al carrito de compras

'/checkout' Checkout - Dirige al checkout, el proceso para realizar la compra y finalizarla.
 
## Componentes:

• CartItem: Componente que muestra el item que está dentro del carrito

• CartWidget: Carrito de compras y su funcionalidad que muestra la cantidad de items agregados.

• checkout: checkout de la página y la funcionalidad que permite ingresar los datos del cliente para finalizar la compra.

• Item: muestra la información que se presenta en ItemDetail y la opción de ver más detalles (redirige al itemDetail)

• ItemCount: Componente que permite determinar la cantidad de un item que se agregará al carrito.

• ItemDetail: Componente que muestra el detalle de un item, su información y la posibilidad de agregar items e ir al carrito de compras.

• ItemDetailContainer: Contenedor del ItemDetail que determina la información a mostrar segun el id del item seleccionado.

• ItemList: Contiene el map de los productos.

• ItemListContainer: Contenedor de los productos que se cargan en el ItemList y sus categorías.

• NavBar: Componente que contiene el menu de navegación del sitio, contiene los links a las categorías, home, acceso a la información de contacto y al carrito de compras.

## Contexto: CartContextProvider

Contiene las funciones que permiten realizar acciones con los productos: 

• isInCart : Items dentro del carro

• AddToCart : Agrega la cantidad seleccionada de items al carro

• emptyCart: Permite borrar todos los items del carro

• totalCount: Indica la cantidad del carrito

• totalPrice: Permite saber el precio total a pagar

• deleteById: Permite borrar el item del carrito (cartList) a partir del id

• removeOneUnit: Remueve 1 unidad del producto del carrito de compras

## Base de datos de Firebase

• Items: category (tablet, celulares), descripcion, img, name, price, stock

• Order: Orden de compra al finalizar el proceso de registro del cliente y compra de productos que genera un codigo de compras automaticamente.

## Autora:

⁎ Katerina Sepúlveda

## Muestra del funcionamiento de la página ecommerce: 

### https://github.com/katusepulveda/git-react/blob/main/public/proyectoMuestra.gif

![proyectoMuestra](https://user-images.githubusercontent.com/94873529/171285537-7ccc1003-f288-4c0c-9228-3c191db21564.gif)
