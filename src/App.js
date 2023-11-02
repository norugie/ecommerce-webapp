import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cart-context';

import Navbar from './components/navbar';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';
import Login from './pages/login/login';
import AddProduct from './pages/products/add-product';
import UpdateProduct from './pages/products/update-product';

function App () {

    // const [cart, setCart] = useState(
    //     localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    // );

    // const { total, cartNumber } = useMemo(() => {
    //     return cart.reduce(
    //         (acc, item) => {
    //             acc.cartNumber += item.quantity;
    //             acc.total += item.price * item.quantity;
    //             return acc;
    //         },
    //         { cartNumber: 0, total: 0 }
    //     );
    // }, [cart]);

    // function handleAddToCart (product) {
    //     let index = cart.findIndex((item) => item.id === product.id);

    //     index !== -1
    //         ? setCart((cart) =>
    //               cart.map((item) =>
    //                   item.id === product.id
    //                       ? { ...item, quantity: item.quantity + 1 }
    //                       : item
    //               )
    //           )
    //         : setCart((cart) => [...cart, { ...product, quantity: 1 }]);
    // }

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart));
    // }, [cart]);

    return (
        <div className='app'>
            <CartContextProvider>
                <Router>
                    {/* <Navbar cartNumber={cartNumber} /> */}
                    <Navbar />
                    <Routes>
                        {/* <Route
                            path='/'
                            element={
                                <div className='container'>
                                    <Products onAddToCart={handleAddToCart} />
                                </div>
                            }
                        />
                        <Route
                            path='/cart'
                            element={
                                <div className='container'>
                                    <Cart cart={cart} setCart={setCart} total={total} />
                                </div>
                            }
                        /> */}
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
                </Router>
            </CartContextProvider>
        </div>
    );
}

export default App;
