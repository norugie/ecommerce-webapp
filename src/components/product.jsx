import React from "react";

export function Product (props) {
    const {id, name, price, image} = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={image} alt={name} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{name}</h3>
                <h3 className="product-price">$ {price.toFixed(2)}</h3>
            </div>
            <button className="add-to-cart-btn" role="button">Add to cart</button>
        </div>
    );
}