import { createContext, useState, useEffect, useMemo } from 'react';

export const CartContext = createContext();

export const CartContextProvider = (props) => {
    // CART ==========================================================
    // Cart States ============
    const [cart, setCart] = useState(
        localStorage.getItem('cart') 
        ? JSON.parse(localStorage.getItem('cart')) 
        : []
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
                item.id === cartItem.id 
                ? { ...item, quantity: quantity } 
                : item
            )
        );
    }

    function removeItemFromCart (cartItem) {
        setCart((cart) => 
            cart.filter((item) => 
                item.id !== cartItem.id
            )
        );
    }

    function removeAllItemsFromCart () {
        setCart([]);
    }

    //  ============================================================

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const cartContextValue = {
        // Cart context values
        cart, setCart, 
        cartNumber, 
        total, 
        addItemToCart,
        updateCartItemQuantity,
        removeItemFromCart,
        removeAllItemsFromCart,
    }

    return (
        <CartContext.Provider value={cartContextValue}>
            {props.children}
        </CartContext.Provider>
    );
}