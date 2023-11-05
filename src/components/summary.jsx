import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

function Summary () {
    const { total } = useContext(ShopContext);
    return (
        <aside>
            <div className='summary'>
                <div className='summary-total-items'>Cart Items Total</div>
                <div className='summary-total'>
                    <div className='total-title'>Total</div>
                    <div className='total-value final-value'>$ {total}</div>
                </div>
                <div className='summary-checkout'>
                    <button className='checkout-cta'>Go to Secure Checkout</button>
                </div>
            </div>
        </aside>
    );
}

export default Summary;