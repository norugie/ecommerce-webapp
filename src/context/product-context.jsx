import axios from 'axios';
import { createContext, useState, useCallback } from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {

    // PRODUCTS =========================================================
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState(1);
    const [productImage, setProductImage] = useState('');

    // Product Functions ============
    const getProducts = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
    }, []);

    const getProduct = useCallback(async (id) => {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        setProductName(response.data[0].name);
        setProductDescription(response.data[0].description);
        setProductPrice(response.data[0].price);
        setProductQuantity(parseInt(response.data[0].quantity));
        setProductImage(response.data[0].image);
    }, []);

    // Form data object for processing product entries
    const form = (product) => {
        const form = new FormData();
        form.append('name', product.name);
        form.append('description', product.description);
        form.append('price', product.price);
        form.append('quantity', product.quantity);
        form.append('image', product.image);
        return form;
    } 

    function addNewProduct (product) {
        const data = form(product);
        axios
        .post('http://localhost:3001/products/create', data)
        .then((response) => {
            if (response.status === 200) {
                window.location = '/'; 
            }
        });
    }

    function updateCurrentProduct (product) {
        const data = form(product);
        axios
        .put(`http://localhost:3001/products/${product.id}/update`, data)
        .then((response) => {
            if (response.status === 200) {
                window.location = '/'; 
            }
        });
    }

    function deleteCurrentProduct (id) {
        axios
        .delete(`http://localhost:3001/products/${id}/delete`)
        .then((response) => {
            if (response.status === 200) {
                window.location = '/'; 
            }
        });
    }

    const productContextValue = {
        // Product context values
        products,
        productName, setProductName,
        productDescription, setProductDescription,
        productPrice, setProductPrice,
        productQuantity, setProductQuantity,
        productImage, setProductImage,
        getProducts, getProduct,
        addNewProduct,
        updateCurrentProduct,
        deleteCurrentProduct
    }

    return (
        <ProductContext.Provider value={productContextValue}>
            {props.children}
        </ProductContext.Provider>
    );
}