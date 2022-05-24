import { useCartContext } from '../context/CartContextProvider'
import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartList, totalPrice, emptyCart} = useCartContext();

    return (

        <div>
            <div>
                <h1>Carito de compras</h1>

                {cartList.map(item => <CartItem key={item.id} {...item} />)}
                <h3>Total: $ {totalPrice()} </h3>
                <div>
                    <button onClick={() => { emptyCart () }}>Limpiar carrito</button>
                    <Link to={'/form'}><button>Realizar compra</button></Link>
                </div>
            </div>
        </div>
    );
};
export default Cart;