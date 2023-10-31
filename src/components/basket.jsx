import Item from "./item";

function Basket({
  cart,
  onChangeItemQuantity,
  onRemoveItemFromCart,
  onClearAllItemsFromCart,
}) {
  return (
    <div className="basket">
      <div className="basket-labels">
        <ul>
          <li className="item item-heading">Item</li>
          <li className="price">Price</li>
          <li className="quantity">Quantity</li>
          <li className="subtotal">Subtotal</li>
        </ul>
      </div>

      {cart.length > 0 ? (
        cart.map((item) => (
          <Item
            key={item.id}
            item={item}
            onChangeItemQuantity={onChangeItemQuantity}
            onRemoveItemFromCart={onRemoveItemFromCart}
          />
        ))
      ) : (
        <div className="empty-cart">Your cart is empty.</div>
      )}
      {cart.length > 0 && (
        <button onClick={onClearAllItemsFromCart}>Clear Cart</button>
      )}
    </div>
  );
}

export default Basket;
