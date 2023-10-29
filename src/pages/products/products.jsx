import React from "react";
import { PRODUCTS } from '../../assets/data/products';
import { Product } from '../../components/product';
import './products.css';

export function Products() {
    return(
        <>
            <h2>Products Page</h2>
            <div className="products">
                {PRODUCTS.map((product) => (<Product product={product} key={product.id} />))}
            </div>
        </>
    );
}