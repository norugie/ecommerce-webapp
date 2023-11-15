import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from "../../context/product-context";

import Product from '../../components/product';
import SearchForm from '../../components/search-form';
import Modal from '../../components/modal';
import './products.css';

function Products () {
    const { products, getProducts } = useContext(ProductContext);

    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return(
        <>
            <h2>Products Page</h2>
            <SearchForm setSearch={setSearch} />
            <div className='products'>
                {
                    products
                    .filter((product) => {
                        if (search.toLowerCase() === '') return product;
                        else 
                            return  product.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                                    || 
                                    product.price
                                    .toString()
                                    .includes(search);
                    })
                    .map((product) => (
                        <Product 
                            key={product.id} 
                            product={product} 
                            setOpen={setOpen} 
                            setSelectedProduct={setSelectedProduct} 
                        />
                    ))
                }

            </div>
            {open && <Modal selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} open={open} setOpen={setOpen} />}
        </>
    );
}

export default Products;