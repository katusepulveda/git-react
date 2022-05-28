import { useCartContext } from '../context/CartContextProvider'
import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom';
import './Cart.css'



const Cart = () => {
    const { cartList, totalPrice, emptyCart} = useCartContext();

    return (

        <div>
            <div>
                <h2 className='titulo'>Carito de compras</h2>

                {cartList.map(item => <CartItem key={item.id} {...item}/>)}

                <h3>Total: $ {totalPrice()} </h3>
                <div>
                    <button onClick={() => { emptyCart () }}>Limpiar carrito</button>

                    <Link to={'/checkout'}>
                    <button>Realizar compra</button></Link>
                </div>
            </div>
        </div>
    );
};
export default Cart;