function Basket () {
    return (
        <div class="basket">
            <div class="basket-labels">
                <ul>
                <li class="item item-heading">Item</li>
                <li class="price">Price</li>
                <li class="quantity">Quantity</li>
                <li class="subtotal">Subtotal</li>
                </ul>
            </div>
            <div class="basket-product">
                <div class="item">
                <div class="product-cart-image">
                    <img src="http://placehold.it/120x166" alt="Placholder Image 2" class="product-frame" />
                </div>
                <div class="product-details">
                    <h2><strong><span class="item-quantity">4</span> x Eliza J</strong> Lace Sleeve Cuff Dress</h2>
                    <p><strong>Navy, Size 18</strong></p>
                    <p>Product Code - 232321939</p>
                </div>
                </div>
                <div class="price">26.00</div>
                <div class="quantity">
                <input type="number" value="4" min="1" class="quantity-field" />
                </div>
                <div class="subtotal">104.00</div>
                <div class="remove">
                <button>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default Basket;