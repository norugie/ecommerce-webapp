import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/user-context';
import { CartContextProvider } from './context/cart-context';
import { ProductContextProvider } from './context/product-context';

import Navbar from './components/navbar';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';
import Login from './pages/login/login';
import AddProduct from './pages/products/add-product';
import UpdateProduct from './pages/products/update-product';

function App () {
    const { user } = useContext(UserContext);

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
                                    <ProductContextProvider>
                                        <Products />
                                    </ProductContextProvider>
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
                        {
                            !user
                            ? (
                                <Route
                                    path='/login'
                                    element={
                                        <div className='container'>
                                            <Login />
                                        </div>
                                }
                                />
                            )
                            : null
                        }
                        {
                            user 
                            ? (
                                <>
                                    <Route
                                        path='/products/add'
                                        element={
                                            <div className='container'>
                                                <ProductContextProvider>
                                                    <AddProduct />
                                                </ProductContextProvider>
                                            </div>
                                    }
                                    />
                                    <Route
                                        path='/products/:id/update'
                                        element={
                                            <div className='container'>
                                                <ProductContextProvider>
                                                    <UpdateProduct />
                                                </ProductContextProvider>
                                            </div>
                                    }
                                    />
                                </>
                            )
                            : null
                        }
                        <Route path={'*'} element={ <Navigate replace to={ '/' }/> }/>
                    </Routes>
                </CartContextProvider>
            </Router>
        </div>
    );
}

export default App;
