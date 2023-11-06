import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import './modal.css';

function Modal ({
    selectedProduct,
    setSelectedProduct,
    open, 
    setOpen
}) {
    const { addItemToCart } = useContext(ShopContext);

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
                        <button className='add-to-cart-btn' onClick={() => addItemToCart(selectedProduct)}>Add to cart</button>
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