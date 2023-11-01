function Product ({
    product, 
    setOpen, 
    setSelectedProduct, 
    onAddToCart
}) {
    function onOpenProductModal (product) {
        setOpen(true);
        setSelectedProduct(product);
    }

    return (
        <div className='product'>
            <div className='product-image'>
                <img src={product.image} alt={product.name} />
            </div>
            <div className='product-info'>
                <h3 className='product-title'><a href='/#' onClick={() => onOpenProductModal(product)}>{product.name}</a></h3>
                <h3 className='product-price'>$ {product.price}</h3>
            </div>
            <button className='add-to-cart-btn' onClick={() => onAddToCart(product)}>Add to cart</button>
        </div>
    );
}

export default Product;