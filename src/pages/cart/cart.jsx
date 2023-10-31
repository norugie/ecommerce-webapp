import Basket from '../../components/basket';
import Summary from '../../components/summary';
import './cart.css';

function Cart ({cart, setCart, total, setTotal}) {
    function handleUpdateCartItemQuantity (cartItem, quantity) {
        total = total - (cartItem.price * cartItem.quantity);
        total = total + (cartItem.price * quantity);

        setTotal(total);
        
        setCart((cart) => cart.map((item) => item.id === cartItem.id ? {...item, quantity: quantity } : item));
    }

    function handleRemoveItemFromCart (cartItem) {
        total = total - (cartItem.price * cartItem.quantity);
        setTotal(total);
        setCart((cart) => cart.filter((item) => item.id !== cartItem.id));
    }

    return(
        <>
            <h2>Cart Page</h2>
            <div className='cart'>
                <Basket cart={cart} setCart={setCart} onChangeItemQuantity={handleUpdateCartItemQuantity} onRemoveItemFromCart={handleRemoveItemFromCart} />
                <Summary total={total} />
            </div>
        </>
    );
}

export default Cart;