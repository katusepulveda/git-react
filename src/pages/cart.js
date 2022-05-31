import { useCartContext } from '../context/CartContextProvider'
import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom';
import './Cart.css'
import bin from '../../src/components/CartItem/img/bin1.png'
import flechas from '../../src/components/CartItem/img/flechas.png'
import cart from '../../src/components/CartItem/img/cart.png'

const Cart = () => {
    const { cartList, totalPrice, emptyCart } = useCartContext();

    return (

        <div>
            <div>
                <div className='titulo'>
                    <h2 >Carrito de compras</h2>
                </div>

                {cartList.map(item => <CartItem key={item.id} {...item} />)}

                <div className='divTotal'>
                    <h3>Total: $ {totalPrice()} </h3>
                </div>

                <div className='divBotones'>
                    <button onClick={() => { emptyCart() }} className="vaciar"> Vaciar <img src= {bin} className="bin"></img></button>
                    <Link to={'/home'}>
                        <button className='continuar'>Continuar comprando  <img src= {cart} className="flechas"></img></button></Link>
                    <Link to={'/checkout'}>
                        <button className='comprar'>Comprar <img src= {flechas} className="flechas"></img></button></Link>
                </div>
            </div>
        </div>
    );
};
export default Cart;