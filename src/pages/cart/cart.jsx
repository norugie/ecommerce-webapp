import Basket from "../../components/basket";
import Summary from "../../components/summary";
import "./cart.css";

function Cart({ cart, setCart, total }) {
  function handleUpdateCartItemQuantity(cartItem, quantity) {
    // No longer needed as our total is already calculated whenever the 'cart' state changes
    // total = total - (cartItem.price * cartItem.quantity);
    // total = total + (cartItem.price * quantity);
    // setTotal(total);

    setCart((cart) =>
      cart.map((item) =>
        item.id === cartItem.id ? { ...item, quantity: quantity } : item
      )
    );
  }

  function handleRemoveItemFromCart(cartItem) {
    // total = total - cartItem.price * cartItem.quantity;
    // setTotal(total);
    setCart((cart) => cart.filter((item) => item.id !== cartItem.id));
  }

  function handleRemoveAllItemsFromCart() {
    // setTotal(0);
    setCart([]);
  }

  return (
    <>
      <h2>Cart Page</h2>
      <div className="cart">
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
