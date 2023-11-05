import axios from "axios";
import { createContext, useState, useEffect, useMemo } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    // Cart States ============
    const [cart, setCart] = useState(
        localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    );

    const { total, cartNumber } = useMemo(() => {
        return cart.reduce(
            (acc, item) => {
                acc.cartNumber += item.quantity;
                acc.total += item.price * item.quantity;
                return acc;
            },
            { cartNumber: 0, total: 0 }
        );
    }, [cart]);

    // Cart Functions ============
    function addItemToCart (product) {
        let index = cart.findIndex((item) => item.id === product.id);

        index !== -1
            ? setCart((cart) =>
                  cart.map((item) =>
                      item.id === product.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item
                  )
              )
            : setCart((cart) => [...cart, { ...product, quantity: 1 }]);
    }

    function updateCartItemQuantity (cartItem, quantity) {
        setCart((cart) =>
            cart.map((item) =>
                item.id === cartItem.id ? { ...item, quantity: quantity } : item
            )
        );
    }

    function removeItemFromCart (cartItem) {
        setCart((cart) => cart.filter((item) => item.id !== cartItem.id));
    }

    function removeAllItemsFromCart () {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Product States ============
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState(0.00);
    const [productQuantity, setProductQuantity] = useState(0);
    const [productImage, setProductImage] = useState('');

    // Product Functions ============
    function addNewProduct (product) {
        console.log(product);

        axios.post('http://localhost:3001/product/create', {
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image: product.image
        }).then((response) => {
            console.log('Success!');
            console.log(response);
        });
    }

    function updateCurrentProduct (product) {
        console.log(product);
    }

    function deleteCurrentProduct (id) {

    }

    const shopContextValue = {
        // Cart context values
        cart, setCart, 
        cartNumber, 
        total, 
        addItemToCart,
        updateCartItemQuantity,
        removeItemFromCart,
        removeAllItemsFromCart,

        // Product context values
        productName, setProductName,
        productDescription, setProductDescription,
        productPrice, setProductPrice,
        productQuantity, setProductQuantity,
        productImage, setProductImage,
        addNewProduct,
        updateCurrentProduct
    }

    return (
        <ShopContext.Provider value={shopContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};