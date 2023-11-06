import { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";

function AddProduct () {
    const { addNewProduct } = useContext(ShopContext);
    
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState(0.00);
    const [productQuantity, setProductQuantity] = useState(0);
    const [productImage, setProductImage] = useState('');

    function handleAddProduct (e) {
        e.preventDefault();
        if (
            !productName || 
            !productPrice || 
            !productQuantity
        ) return;

        const formdata = new FormData();
        formdata.append('file', productImage);

        const id = crypto.randomUUID();
        const newProduct = {
            id: id,
            name: productName,
            description: productDescription,
            price: parseFloat(productPrice),
            quantity: parseInt(productQuantity),
            image: productImage !== '' ? productImage : 'product-placeholder.png'
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
                    onChange={(e) => setProductName(e.target.value)} 
                />
                <textarea
                    id='product-description'
                    className='form-text'
                    rows='3' 
                    placeholder='Product Description'
                    onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
                <input 
                    type='text'
                    id='product-price'
                    className='form-text'
                    autoComplete='off' 
                    placeholder='Product Price (in dollars)'
                    onChange={(e) => setProductPrice(e.target.value)}
                />
                <div className='product-quantity'>
                    <label htmlFor='product-quantity'>Available Stock: </label>
                    <input
                        type='number'
                        id='product-quantity'
                        className='quantity-field'
                        min='1'
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