import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../context/user-context";
import { CartContext } from "../context/cart-context";
import './navbar.css';

function Navbar () {
    const { 
        user,
        logoutAdmin 
    } = useContext(UserContext);

    const { cartNumber } = useContext(CartContext);

    return(
        <header>
            <div className='container container-nav'>
                <div className='title'>
                    <h1 className='header'>React Shop</h1>
                    <p className='header-subtitle'>Your One Stop Sample Apparel Shop</p>
                </div>
                <nav className='navbar'>
                    <ul>
                        <li><Link to={'/'}>Products</Link></li>
                        {
                            !user 
                            ? <li><Link to={'/cart'}>Cart <span className='badge badge-warning'> {cartNumber} </span></Link></li>
                            : <li><Link to={'products/add'}>New Product</Link></li>
                        }
                        {
                            user 
                            ? <li style={{'cursor': 'pointer', 'textTransform': 'uppercase'}} onClick={logoutAdmin}>Logout</li>
                            : <li><Link to={'/login'}>Admin Login</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;