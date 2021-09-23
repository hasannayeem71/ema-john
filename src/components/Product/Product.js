import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {name,img,price,seller,stock} = props.product;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div>
            <h4 >{name}</h4>
            <p><small>By: {seller}</small></p>
            <h5>Price : ${price}</h5>
            <p><small>only {stock} left in stock - order soon</small></p>
            <button className='add-btn' onClick={()=>props.handleClick(props.product)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;