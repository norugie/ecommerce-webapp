import React, { useState, useContext } from 'react';
// import { PRODUCTS } from '../../assets/data/products';
import { ShopContext } from '../../context/shop-context';

import Product from '../../components/product';
import SearchForm from '../../components/search-form';
import Modal from '../../components/modal';
import './products.css';

function Products () {
    const { products } = useContext(ShopContext);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [search, setSearch] = useState('');

    return(
        <>
            <h2>Products Page</h2>
            <SearchForm setSearch={setSearch} />
            <div className='products'>
                {
                    products.filter((product) => {
                        if (search.toLowerCase() === '') return product;
                        else return product.name.toLowerCase().includes(search.toLowerCase())
                        || product.price.toString().includes(search);
                    }).map((product) => (
                        <Product key={product.id} product={product} setOpen={setOpen} setSelectedProduct={setSelectedProduct} />
                    ))
                }

            </div>
            {open && <Modal selectedProduct={selectedProduct} open={open} setOpen={setOpen} />}
        </>
    );
}

export default Products;