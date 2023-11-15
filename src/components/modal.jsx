import { useContext } from 'react';
import { UserContext } from '../context/user-context';
import { CartContext } from '../context/cart-context';
import './modal.css';

function Modal ({
    selectedProduct,
    setSelectedProduct,
    open, 
    setOpen
}) {
    const { user } = useContext(UserContext);
    const { addItemToCart } = useContext(CartContext);

    function closeModal () {
        setOpen(false);
        setSelectedProduct(null);
    }

    return (
        <div className={`modal ${open ? 'open' : ''}`}>
            <div className='modal-content'>
                <div className='product-item'>
                    <div className='content'>
                        <h2>{selectedProduct.name}</h2>
                        <h2>$ {selectedProduct.price}</h2>
                        <h4>Product Description</h4>
                        <p>{selectedProduct.description}</p>
                        <br />
                        <p>Available Stock: {selectedProduct.quantity > 0 ? selectedProduct.quantity : 'Out of stock'}</p>
                        <br />
                        {
                            !user 
                            &&
                                <>
                                    {
                                        selectedProduct.quantity > 0 
                                        ? <button className='add-to-cart-btn' onClick={() => addItemToCart(selectedProduct)}>Add to cart</button>
                                        : <button disabled>Out of stock</button>
                                    }
                                </>
                        }
                    </div>
                    <img 
                        src={ require(`../assets/images/products/${selectedProduct.image}`) } 
                        alt={selectedProduct.name} 
                    />
                </div>

                <a href='/#' className='modal-close' role='button' onClick={closeModal}>&times;</a>
            </div>
        </div>
    );
}

export default Modal;