import { useState } from "react";

function Item({ item, onChangeItemQuantity, onRemoveItemFromCart }) {
  const [quantity, setQuantity] = useState(item.quantity);

  function onChangeValue(quantity) {
    quantity = parseInt(quantity); // just making sure its an integer, as you know 'strings' don't + nicely.
    setQuantity(parseInt(quantity));
    onChangeItemQuantity(item, quantity);
  }
  return (
    <div className="basket-product">
      <div className="item">
        <div className="product-cart-image">
          <img src={item.image} alt={item.name} className="product-frame" />
        </div>
        <div className="product-details">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="price">$ {item.price}</div>
      <div className="quantity">
        <input
          type="number"
          className="quantity-field"
          min="1"
          value={parseInt(quantity)}
          onChange={(e) => onChangeValue(e.target.value)}
        />
      </div>
      <div className="subtotal">$ {item.price * quantity}</div>
      <div className="remove">
        <button onClick={() => onRemoveItemFromCart(item)}>Remove</button>
      </div>
    </div>
  );
}

export default Item;
