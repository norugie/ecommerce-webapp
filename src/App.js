import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/navbar";
import Products from "./pages/products/products";
import Cart from "./pages/cart/cart";

function App() {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  // 'useMemo' is basically a useEffect, which runs whenever a dependancy changes,
  // but instead of calling functions, and having the option for a cleanup function, etc,
  // you can return a value, or array or object which is memorized until a dependancy changes again.
  // useMemo's are mainly used to increase efficiency and prevent redundant work.
  // In other words, if you didn't wrap the totalQty code in a useMemo, it would run that code every render (vs only when the cart dependancy changes)

  const cartNumber = useMemo(() => {
    // Get the sum of items in the cart, using the quantity for each item
    // This reduce function start with a starting value of 0,
    // then for each iteration we are taking the "accumelated" value (0 to start) and adding the quantity to it
    // so in each iteration 'acc' is increasing by the quantity amount.
    const totalQty = cart.reduce((acc, item) => {
      acc += item.quantity;
      return acc;
    }, 0);

    return totalQty;
  }, [cart]);

  // Another useMemo to calculate the order total
  // again, this function only runs when the 'cart' dependancy changes
  const total = useMemo(() => {
    // start with value of 0 and add the price * quantity for each iteration
    return cart.reduce((acc, item) => (acc += item.price * item.quantity), 0);
  }, [cart]);

  //
  // Technically these two useMemo's can be turned into one to further improve efficiency
  // Feel free to comment out the two useMemo's above and uncommenting this one below
  //

  // Here we have a single useMemo that calculates both the cartNumber and total in a single reduce function
  // As you can tell the default value for the reduce function is an object with the two key-value pairs, which we are increasing with each iteration
  // we then return the result to the useMemo, which is then destructured into two variables - 'total' and 'cartNumber'

  //   const { total, cartNumber } = useMemo(() => {
  //     return cart.reduce(
  //       (acc, item) => {
  //         acc.cartNumber += item.quantity;
  //         acc.total += item.price * item.quantity;
  //         return acc;
  //       },
  //       { cartNumber: 0, total: 0 }
  //     );
  //   }, [cart]);

  function handleAddToCart(product) {
    let index = cart.findIndex((item) => item.id === product.id);

    index !== -1
      ? setCart((cart) =>
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        )
      : setCart((cart) => [...cart, { ...product, quantity: 1 }]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="app">
      <Router>
        {/* Will always be available when put outside the Routes section */}
        <Navbar cartNumber={cartNumber} />
        {/* Contains all the routes for this web app */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Products onAddToCart={handleAddToCart} />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div className="container">
                <Cart cart={cart} setCart={setCart} total={total} />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
