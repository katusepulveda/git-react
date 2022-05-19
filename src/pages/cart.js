import { useCartContext } from '../context/CartContextProvider'
import CartItem from '../components/CartItem/CartItem'

const Cart = () => {
    const { cartList } = useCartContext();

return (
    <div>
  {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}     
       <h1> cart </h1>
    </div>
      );
};
export default Cart;