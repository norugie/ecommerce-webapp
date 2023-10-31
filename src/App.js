import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';

function App() {
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    const cartNumber = cart.length;
    const [total, setTotal] = useState(localStorage.getItem('total') ? parseInt(localStorage.getItem('total')) : 0);

    function handleAddToCart (product) {
        let index = cart.findIndex((item) => item.id === product.id);
        
        index !== -1 ? setCart((cart) => cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1 } : item)) : setCart((cart) => [...cart, {...product, quantity: 1}]);
        
        setTotal(total + product.price);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total', total);
    }, [cart, total]);

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
                            <Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
                        </div>
                    }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
