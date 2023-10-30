import React, { useState } from 'react';
import { PRODUCTS } from '../../assets/data/products';
import Product from '../../components/product';
import Form from '../../components/form';
import './products.css';

function Products({onAddToCart}) {
    const [search, setSearch] = useState('');

    return(
        <>
            <h2>Products Page</h2>
            <Form setSearch={setSearch} />
            <div className='products'>
                {
                    PRODUCTS.filter((product) => {
                        if (search.toLowerCase() === '') return product;
                        else return product.name.toLowerCase().includes(search.toLowerCase())
                        || product.price.toString().includes(search.toLowerCase());
                    }).map((product) => (
                        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))
                }
            </div>
        </>
    );
}

export default Products;