import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/product-context';
import { useParams } from 'react-router-dom'; 

function UpdateProduct () {
    const {
        productName, setProductName,
        productDescription, setProductDescription,
        productPrice, setProductPrice,
        productQuantity, setProductQuantity,
        productImage, setProductImage,
        getProduct, 
        updateCurrentProduct
    } = useContext(ProductContext);

    const { id } = useParams();

    useEffect(() => {
        getProduct(id);
    }, [getProduct, id]);

    function handleUpdateProduct (e) {
        e.preventDefault();
        if (
            !productName || 
            !productPrice || 
            !productQuantity
        ) return;

        const updatedProduct = {
            id: id,
            name: productName,
            description: productDescription,
            price: parseFloat(productPrice),
            quantity: parseInt(productQuantity),
            image: productImage
        };

        updateCurrentProduct(updatedProduct);
    }
    
    return (
        <div className='form-product'>
            <div className='form-title'>Update Product</div>
            <form className='product-form' onSubmit={handleUpdateProduct}>
                <input
                    type='text'
                    id='product-update-name'
                    className='form-text'
                    autoComplete='off' 
                    placeholder='Product Name'
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)} 
                />
                <textarea
                    id='product-update-description'
                    className='form-text'
                    rows='3' 
                    placeholder='Product Description'
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
                <input
                    type='text'
                    id='product-update-price'
                    className='form-text'
                    autoComplete='off' 
                    placeholder='Product Price'
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)} 
                />
                <div className='product-quantity'>
                    <label htmlFor='product-update-quantity'>Available Stock: </label>
                    <input
                        type='number'
                        id='product-update-quantity'
                        className='quantity-field'
                        min='1'
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                    />
                </div>
                <div className='product-image'>
                    <label htmlFor='product-update-image'>Select image: </label>
                    <input 
                        type='file' 
                        id='product-update-image' 
                        className='image-field'
                        name='product-image' 
                        accept='image/*'
                        onChange={(e) => setProductImage(e.target.files[0])}
                    />
                </div>

                <br />
                <div className='form-submit'>
                    <button className='form-submit-btn'>UPDATE PRODUCT</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateProduct;