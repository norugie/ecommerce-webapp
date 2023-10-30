function Product ({product, onAddToCart}) {
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={product.image} alt={product.name} />
            </div>
            <div className='product-info'>
                <h3 className='product-title'>{product.name}</h3>
                <h3 className='product-price'>$ {product.price.toFixed(2)}</h3>
            </div>
            <button className='add-to-cart-btn' onClick={() => onAddToCart(product)}>Add to cart</button>
        </div>
    );
}

export default Product;