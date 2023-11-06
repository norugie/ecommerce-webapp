import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import './navbar.css';

function Navbar () {
    const { 
        user, 
        cartNumber, 
        logoutAdmin 
    } = useContext(ShopContext);
    console.log(user);
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