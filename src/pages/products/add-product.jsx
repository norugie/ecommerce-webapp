import { useContext } from 'react';
import { ProductContext } from '../../context/product-context';

function AddProduct () {
    const { 
        productName, setProductName,
        productDescription, setProductDescription,
        productPrice, setProductPrice,
        productQuantity, setProductQuantity,
        productImage, setProductImage,
        addNewProduct
    } = useContext(ProductContext);


    function handleAddProduct (e) {
        e.preventDefault();
        if (
            !productName || 
            !productPrice || 
            !productQuantity
        ) return;

        const id = crypto.randomUUID();
        const newProduct = {
            id: id,
            name: productName,
            description: productDescription,
            price: parseFloat(productPrice),
            quantity: parseInt(productQuantity),
            image: productImage
        };

        addNewProduct(newProduct);
    } 

    return (
        <div className='form-product'>
            <div className='form-title'>Add Product</div>
            <form className='product-form' onSubmit={handleAddProduct}>
                <input
                    type='text'
                    id='product-name'
                    className='form-text'
                    autoComplete='off' 
                    placeholder='Product Name'
                    defaultValue={productName}
                    onChange={(e) => setProductName(e.target.value)} 
                />
                <textarea
                    id='product-description'
                    className='form-text'
                    rows='3' 
                    placeholder='Product Description'
                    defaultValue={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
                <input 
                    type='text'
                    id='product-price'
                    className='form-text'
                    autoComplete='off' 
                    placeholder='Product Price (in dollars)'
                    defaultValue={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
                <div className='product-quantity'>
                    <label htmlFor='product-quantity'>Available Stock: </label>
                    <input
                        type='number'
                        id='product-quantity'
                        className='quantity-field'
                        min='1'
                        defaultValue={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                    />
                </div>
                <div className='product-image'>
                    <label htmlFor='product-image'>Select image: </label>
                    <input 
                        type='file' 
                        id='product-image' 
                        className='image-field'
                        name='product-image' 
                        accept='image/*'
                        onChange={(e) => {setProductImage(e.target.files[0])}}
                    />
                </div>

                <br />
                <div className='form-submit'>
                    <button className='form-submit-btn'>ADD NEW PRODUCT</button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;