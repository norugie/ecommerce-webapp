import axios from 'axios';
import { createContext, useState, useEffect, useMemo } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    // CART ==========================================================
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

    // PRODUCTS =========================================================
    // Product Functions ============
    function addNewProduct (product) {
        axios.post('http://localhost:3001/products/create', {
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image: product.image
        }).then((response) => {
            if (response.status === 200) {
                window.location = '/' 
            }
        });
    }

    function updateCurrentProduct (product) {
        axios.put('http://localhost:3001/products/update', {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image: product.image
        }).then((response) => {
            if (response.status === 200) {
                window.location = '/' 
            }
        });
    }

    function deleteCurrentProduct (id) {
        console.log(id);
        axios.delete(`http://localhost:3001/products/${id}/delete`).then((response) => {
            if (response.status === 200) {
                window.location = '/' 
            }
        });
    }

    //  ============================================================

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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
        addNewProduct,
        updateCurrentProduct,
        deleteCurrentProduct
    }

    return (
        <ShopContext.Provider value={shopContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};