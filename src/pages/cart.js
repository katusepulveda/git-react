import { useCartContext } from '../context/CartContextProvider'
import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartList, totalCount, emptyCart} = useCartContext();

    return (

        <div>
            <div>
                <h1>Cart</h1>

{/*                 {cartList.map(p => <CartItem key={p.id} {...p} />)}
                <h3>Total: {totalCount()}€ </h3>
                <div>
                    <button onClick={() => { emptyCart () }}>Limpiar carrito</button>
                    <Link to={'/form'}><button>Realizar compra</button></Link>
                </div> */}
                


            </div>

        </div>
    );
};
export default Cart;