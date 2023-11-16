import { useContext } from 'react';
import { UserContext } from '../context/user-context';
import { CartContext } from '../context/cart-context';
import { ProductContext } from '../context/product-context';
import { useNavigate } from 'react-router-dom';

function Product ({
    product, 
    setOpen, 
    setSelectedProduct
}) {
    const { user } = useContext(UserContext);
    const { addItemToCart } = useContext(CartContext);
    const { deleteCurrentProduct } = useContext(ProductContext);
    
    function onOpenProductModal (product) {
        setOpen(true);
        setSelectedProduct(product);
    }

    let navigate = useNavigate(); 
    function updateProductRoute () { 
        let path = `/products/${product.id}/update`; 
        navigate(path);
    }

    return (
        <div className='product'>
            <div className='product-image'>
                <img src={ require(`../assets/images/products/${product.image}`) } alt={product.name} />
            </div>
            <div className='product-info'>
                <h3 className='product-title'><a href='/#' onClick={() => onOpenProductModal(product)}>{product.name}</a></h3>
                <h3 className='product-price'>$ {product.price}</h3>
            </div>
            {
                !user 
                ?
                    <>
                        {
                            product.quantity > 0 
                            ? <button className='add-to-cart-btn' onClick={() => addItemToCart(product)}>Add to cart</button>
                            : <button className='disabled' disabled>Sold Out</button>
                        }
                    </>
                : 
                    <>
                        <div className='manage-product'>
                            <button className='update-btn' onClick={updateProductRoute}>Update</button>
                            <button className='delete-btn' onClick={() => deleteCurrentProduct(product.id)}>Delete</button>
                        </div>
                    </>
            }
        </div>
    );
}

export default Product;