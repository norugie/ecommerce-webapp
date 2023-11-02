import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cart-context';
import { ProductContextProvider } from './context/product-context';

import Navbar from './components/navbar';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';
import Login from './pages/login/login';
import AddProduct from './pages/products/add-product';
import UpdateProduct from './pages/products/update-product';

function App () {
    return (
        <div className='app'>
            <Router>
                <CartContextProvider>
                    <Navbar />
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <div className='container'>
                                    <Products />
                                </div>
                            }
                        />
                        <Route
                            path='/cart'
                            element={
                                <div className='container'>
                                    <Cart />
                                </div>
                            }
                        />
                        <Route
                            path='/login'
                            element={
                                <div className='container'>
                                    <Login />
                                </div>
                        }
                        />
                    </Routes>
                </CartContextProvider>
                <ProductContextProvider>
                    <Routes>
                        <Route
                            path='/products/add'
                            element={
                                <div className='container'>
                                    <AddProduct />
                                </div>
                        }
                        />
                        <Route
                            path='/products/update'
                            element={
                                <div className='container'>
                                    <UpdateProduct />
                                </div>
                        }
                        />
                    </Routes>
                </ProductContextProvider>
            </Router>
        </div>
    );
}

export default App;
