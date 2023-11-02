function AddProduct () {
    return (
        <div className='form-product'>
            <div className='form-title'>Add Product</div>
            <form className='product-form'>
                <input
                    type='text'
                    id='product-name'
                    className='form-text'
                    autoComplete='off' 
                    placeholder='Product Name'
                />
                <textarea
                    id='product-description'
                    className='form-text'
                    rows='3' 
                    placeholder='Product Description'
                ></textarea>
                <input 
                    type='text'
                    id='product-price'
                    className='form-text'
                    autoComplete='off' 
                    placeholder='Product Price (in dollars)' 
                />
                <div className='product-quantity'>
                    <label htmlFor='product-quantity'>Available Stock: </label>
                    <input
                        type='number'
                        id='product-quantity'
                        className='quantity-field'
                        min='1'
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
                    />
                </div>

                <br />
                <div className='form-submit'>
                    <button className='form-submit-btn'>LOGIN</button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;