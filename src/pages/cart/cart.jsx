import Basket from '../../components/basket';
import Summary from '../../components/summary';
import './cart.css';

function Cart ({ 
    cart, 
    setCart, 
    total 
}) {
    function handleUpdateCartItemQuantity (cartItem, quantity) {
        setCart((cart) =>
            cart.map((item) =>
                item.id === cartItem.id ? { ...item, quantity: quantity } : item
            )
        );
    }

    function handleRemoveItemFromCart (cartItem) {
        setCart((cart) => cart.filter((item) => item.id !== cartItem.id));
    }

    function handleRemoveAllItemsFromCart () {
        setCart([]);
    }

    return (
        <>
            <h2>Cart Page</h2>
            <div className='cart'>
                <Basket
                    cart={cart}
                    onChangeItemQuantity={handleUpdateCartItemQuantity}
                    onRemoveItemFromCart={handleRemoveItemFromCart}
                    onClearAllItemsFromCart={handleRemoveAllItemsFromCart}
                />
                <Summary total={total} on />
            </div>
        </>
    );
}

export default Cart;
