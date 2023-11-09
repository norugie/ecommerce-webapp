import axios from 'axios';
import { useState, useContext, useEffect, useCallback } from "react";
import { ShopContext } from "../../context/shop-context";
import { useParams } from "react-router-dom"; 

function UpdateProduct () {
    const { updateCurrentProduct } = useContext(ShopContext);

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState(1);
    const [productImage, setProductImage] = useState('');

    const { id } = useParams();

    const getProduct = useCallback(async (id) => {
        const response = await axios.get(`http://localhost:3001/products/${id}`);

        setProductName(response.data[0].name);
        setProductDescription(response.data[0].description);
        setProductPrice(response.data[0].price);
        setProductQuantity(response.data[0].quantity);
        setProductImage(response.data[0].image);
    }, []);

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
                    defaultValue={productName}
                    onChange={(e) => setProductName(e.target.value)} 
                />
                <textarea
                    id='product-update-description'
                    className='form-text'
                    rows='3' 
                    placeholder='Product Description'
                    defaultValue={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
                <input
                    type='text'
                    id='product-update-price'
                    className='form-text'
                    autoComplete='off' 
                    placeholder='Product Price'
                    defaultValue={productPrice}
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
                        onChange={(e) => {setProductImage(e.target.files[0])}}
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