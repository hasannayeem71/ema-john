import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';


const Product = (props) => {
    // console.log(props);
    const {name,img,price,seller,stock,star} = props.product;
    const cartIncon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div>
            <h4 >{name}</h4>
            <p><small>By: {seller}</small></p>
            <h5>Price : ${price}</h5>
            <p><small>only {stock} left in stock - order soon</small></p>
            <Rating readonly
            initialRating={star}
            fullSymbol="fas fa-star star-color"
            emptySymbol="far fa-star star-color"
            />
            <br />
            <button className='add-btn' onClick={()=>props.handleClick(props.product)}>{cartIncon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;