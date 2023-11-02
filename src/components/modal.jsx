import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import './modal.css';

function Modal ({
    selectedProduct, 
    open, 
    setOpen
}) {
    const { addItemToCart } = useContext(CartContext);

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
                        <button className='add-to-cart-btn' onClick={() => addItemToCart(selectedProduct)}>Add to cart</button>
                    </div>
                    <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                    />
                </div>

                <a href='/#' className='modal-close' role='button' onClick={() => setOpen(false)}>&times;</a>
            </div>
        </div>
    );
}

export default Modal;