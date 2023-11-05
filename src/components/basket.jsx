import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import Item from './item';

function Basket () {
    const { cart, removeAllItemsFromCart } = useContext(ShopContext);
    return (
        <div className='basket'>
            <div className='basket-labels'>
                <ul>
                    <li className='item item-heading'>Item</li>
                    <li className='price'>Price</li>
                    <li className='quantity'>Quantity</li>
                    <li className='subtotal'>Subtotal</li>
                </ul>
            </div>

            {cart.length > 0 ? (
                cart.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                    />
                ))
            ) : (
                <div className='empty-cart'>Your cart is empty.</div>
            )}
            {cart.length > 0 && (
                <button onClick={removeAllItemsFromCart}>Clear Cart</button>
            )}
        </div>
    );
}

export default Basket;
