import axios from 'axios';
import { createContext, useState, useEffect, useMemo } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    // USER ==========================================================
    // User States ============
    const [user, setUser] = useState(
        localStorage.getItem('user') || localStorage.getItem('user') === '' ? localStorage.getItem('user') : ''
    );

    function loginAdmin (login) {
        axios.post('http://localhost:3001/login', {
            username: login.username,
            password: login.password
        }).then((response) => {
            if (response.status === 200) {
                setUser(response.data[0].name);
                window.location = '/';
            }
        });
    }

    function logoutAdmin () {
        setUser('');
        window.location = '/';
    }

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
    // Form data for processing product entries
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
        axios.post('http://localhost:3001/products/create', data).then((response) => {
            if (response.status === 200) {
                window.location = '/'; 
            }
        });
    }

    function updateCurrentProduct (product) {
        const data = form(product);
        axios.put(`http://localhost:3001/products/${product.id}/update`, data).then((response) => {
            if (response.status === 200) {
                window.location = '/'; 
            }
        });
    }

    function deleteCurrentProduct (id) {
        axios.delete(`http://localhost:3001/products/${id}/delete`).then((response) => {
            if (response.status === 200) {
                window.location = '/'; 
            }
        });
    }

    //  ============================================================

    useEffect(() => {
        localStorage.setItem('user', user);
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [user, cart]);

    const shopContextValue = {
        // User context values
        user,
        loginAdmin,
        logoutAdmin,

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