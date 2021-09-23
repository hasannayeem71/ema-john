import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleClick = product => {
        const newCart = [...cart,product];
        setCart(newCart);
    }
    if (products.length !== 0) {
        return (
            <div className='shop-container'>
                <div className="product-container">

                    {
                        products.map(product => <Product product={product} key={product.key} handleClick={handleClick}></Product>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
};

export default Shop;