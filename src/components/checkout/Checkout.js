import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import { collection, addDoc } from 'firebase/firestore'
import db from '../../Services/firebase';

const Checkout = () => {

    const { cartList, totalCount, totalPrice } = useContext(CartContext)

    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Teléfono: ''
    })

    const { Nombre, Email, Teléfono } = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const generateOrder = async (data) => {
        try {
 const col = collection(db, "orders")
 const order = await addDoc (col, data)
 console.log("order", order)
 console.log(order, order.id)
        } catch (error) {
console.log(error)
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = cartList.map(e => { return { id: e.id, title: e.name, amount: e.quantity } })
        const precioTotal = totalPrice()
        const data = { buyer, items, precioTotal, dia }

        console.log(data)
        generateOrder(data)
    }

    return (
        <div>

            <h1>Ingresa tus datos para finalizar la compra:</h1>
            <br />
            <h2>Completar datos: </h2>
            <br />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Nombre"
                    placeholder="Nombre"
                    value={Nombre}
                    onChange={handleInputChange}
                />
                <input
                    type="Email"
                    name="Email"
                    placeholder="Email"
                    value={Email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="Teléfono"
                    placeholder="Teléfono"
                    value={Teléfono}
                    onChange={handleInputChange}
                />
                <input
                    type="submit"
                    value="Finalizar compra"
                    className="botonSubmit"
                />

            </form>
        </div>
    )
}
export default Checkout;