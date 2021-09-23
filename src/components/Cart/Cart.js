import React from 'react';
import './Cart.css';

const Cart = (props) =>{
    // console.log(props);
    const {cart} = props;
    // console.log(cart);
    let total=0, shipping=0;
    for (const product of cart) {
        total+= product.price;
        shipping+=product.shipping;
    }
    const tax= total*0.10;
    const grandTotal = tax+total+shipping;
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
             <h5>Items ordered:{props.cart.length}</h5>
            <p> <small>Items:{total.toFixed(2)}</small></p>
            <p> <small>Shipping and handaling : ${shipping.toFixed(2)}</small></p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;