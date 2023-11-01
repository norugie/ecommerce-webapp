function UpdateProduct () {
    return (
        <div className='form-product'>
            <div className='form-title'>Update Product</div>
            <form className='product-form'>
                <div className='input-fields'>
                    <input type='text' placeholder='Product Name' className='form-text'></input>
                    <textarea className='form-text' rows='3' placeholder='Product Description'></textarea>
                    <input type='text' placeholder='Product Price (in dollars)' className='form-text'></input>
                    <div className='product-quantity'>
                        <label htmlFor='productquantity'>Available Stock: </label>
                        <input
                            type='number'
                            className='quantity-field'
                            min='1'
                        />
                    </div>
                    <div className='product-image'>
                        <label htmlFor='productimage'>Select image: </label>
                        <input type='file' id='product-img' name='product-img' accept='image/*' />
                    </div>
                </div>
                <br />
                <div className='form-submit'>
                    <button className='form-submit-btn'>LOGIN</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateProduct;