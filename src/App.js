import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';

function App() {
    const [cart, setCart] = useState([]);
    const cartNumber = cart.length;

    function handleAddToCart (product) {
        let index = cart.findIndex((c) => c.id === product.id);
        index !== -1 ? console.log("item already exists") : console.log("new item");
        index !== -1 ? setCart((cart) => cart.map((c) => c.id === product.id ? {...c, quantity: c.quantity + 1 } : c)) : setCart((cart) => [...cart, {...product, quantity: 1}]);
    }

    console.log(cart);

    return (
        <div className='app'>
            <Router>
                {/* Will always be available when put outside the Routes section */}
                <Navbar cartNumber={cartNumber} />
                {/* Contains all the routes for this web app */}
                <Routes>
                    <Route path='/' element={
                        <div className='container'>
                            <Products onAddToCart={handleAddToCart} />
                        </div>
                    } />
                    <Route path='/cart' element={
                        <div className='container'>
                            <Cart cart={cart} setCart={setCart} />
                        </div>
                    }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
