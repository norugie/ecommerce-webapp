import React from 'react';
import Basket from '../../components/basket';
import Summary from '../../components/summary';
import './cart.css';

function Cart () {
    return(
        <>
            <h2>Cart Page</h2>
            <div className='cart'>
                <Basket />
                <Summary />
            </div>
        </>
    );
}

export default Cart;