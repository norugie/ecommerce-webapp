import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState(0.00);
    const [productQuantity, setProductQuantity] = useState(0);
    const [productImage, setProductImage] = useState('');

    // Product Functions ============
    function addProduct (product) {
        console.log(product);
    }

    function updateProduct (product) {
        console.log(product);
    }

    function deleteProduct (id) {

    }

    const productContextValue = {
        // Product states
        productName, setProductName,
        productDescription, setProductDescription,
        productPrice, setProductPrice,
        productQuantity, setProductQuantity,
        productImage, setProductImage,
        addProduct,
        updateProduct
    }

    return (
        <ProductContext.Provider value={productContextValue}>
            {props.children}
        </ProductContext.Provider>
    );
};