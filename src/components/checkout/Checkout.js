import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import { collection, addDoc } from 'firebase/firestore'
import db from '../../Services/firebase';
import './checkout.css'
import { NavLink } from 'react-router-dom'
import bag from '../../../src/components/checkout/img/bag.png'

const Checkout = () => {

    const { cartList, totalPrice, emptyCart } = useContext(CartContext)
    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
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
        setLoad(true)
        try {
            const col = collection(db, "orders")
            const order = await addDoc(col, data)
            setOrderID(order.id)
            console.log("order", order)
            setLoad(false)
            emptyCart()
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

    if (orderID) {
        return (
            <div className='compraRealizada'>
                            <img src={bag} className="icono"></img>
                <h2>Tu compra ha sido realizada!</h2>
                <h3>Recibirás tu pedido dentro de 5 a 10 días hábiles.</h3>
                <h3>El código de tu compra es: </h3>
                <h4>{orderID}</h4>

                <div >            
                    <NavLink to="/" className='link'>Volver al inicio</NavLink>
                </div>
            </div>
        )
    }

    if (load) {
        return (
            <h3>su orden está cargando</h3>
        )
    }

    return (
        <div>
            <img src={bag} className="icono"></img>
            <h1>Finaliza tu compra</h1>
            <h2>Completa el registro de cliente para realizar la compra</h2>
            <br />
            <div>
                <br />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="Nombre"
                        placeholder="Nombre"
                        value={Nombre}
                        onChange={handleInputChange}
                        required
                        className='input'
                    />
                    <input
                        type="Email"
                        name="Email"
                        placeholder="Email"
                        value={Email}
                        onChange={handleInputChange}
                        required
                        className='input'

                    />
                    <input
                        type="text"
                        name="Teléfono"
                        placeholder="Teléfono"
                        value={Teléfono}
                        onChange={handleInputChange}
                        required
                        className='input'

                    />
                    <input
                        type="submit"
                        value="Finalizar compra"
                        className="botonSubmit"
                    />
                </form>
            </div>
        </div>
    )
}

export default Checkout;