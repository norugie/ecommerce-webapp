import { useState } from 'react';
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

function Item ({ item }) {
    const [quantity, setQuantity] = useState(item.quantity);
    const { updateCartItemQuantity, removeItemFromCart } = useContext(ShopContext);

    function onChangeValue(quantity) {
        quantity = parseInt(quantity);
        setQuantity(quantity);
        updateCartItemQuantity(item, quantity);
    }
    return (
        <div className='basket-product'>
            <div className='item'>
              <div className='product-cart-image'>
                    <img 
                    src={ require(`../assets/images/products/${item.image}`) } 
                    alt={item.name} 
                    className='product-frame'
                    />
              </div>
              <div className='product-details'>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
              </div>
            </div>
            <div className='price'>$ {item.price}</div>
            <div className='quantity'>
                <input
                    type='number'
                    id={`item-cart-quantity-${item.id}`}
                    className='quantity-field'
                    min='1'
                    value={quantity}
                    onChange={(e) => onChangeValue(e.target.value)}
                />
            </div>
            <div className='subtotal'>$ {item.price * quantity}</div>
            <div className='remove'>
                <button onClick={() => removeItemFromCart(item)}>Remove</button>
            </div>
        </div>
    );
}

export default Item;
