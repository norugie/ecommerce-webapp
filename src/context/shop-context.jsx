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
    function addNewProduct (product) {
        console.log(product);
        const data = new FormData();
        data.append('name', product.name);
        data.append('description', product.description);
        data.append('price', product.price);
        data.append('quantity', product.quantity);
        data.append('image', product.image);
        console.log(data);
        axios.post('http://localhost:3001/products/create', data).then((response) => {
            console.log(response);
            if (response.status === 200) {
                window.location = '/'; 
            }
        });
    }

    function updateCurrentProduct (product) {
        axios.put(`http://localhost:3001/products/${product.id}/update`, {
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image: product.image
        }).then((response) => {
            if (response.status === 200) {
                window.location = '/'; 
            }
        });
    }

    function deleteCurrentProduct (id) {
        console.log(id);
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