import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Products } from "./pages/products/products";
import { Cart } from "./pages/cart/cart";

function App() {
    return (
        <div className="App">
            <Router>
                {/* Will always be available when put outside the Routes section */}
                <Navbar />
                {/* Contains all the routes for this web app */}
                <Routes>
                    <Route path="/" element={
                        <div className="container">
                            <Products />
                        </div>
                    } />
                    <Route path="/cart" element={
                        <div className="container">
                            <Cart />
                        </div>
                    }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
