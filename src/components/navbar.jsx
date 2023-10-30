import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar () {
    return(
        <header>
            <div className='container container-nav'>
                <div className='title'>
                    <h1 className='header'>Rugie's Shop</h1>
                    <p className='header-subtitle'>Your One Stop Sample Apparel Shop</p>
                </div>
                <nav className='navbar'>
                    <ul>
                        <li><Link to={'/'}>Products</Link></li>
                        <li><Link to={'/cart'}>Cart</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;