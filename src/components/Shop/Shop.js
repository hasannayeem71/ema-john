import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [uiProducts, setUiProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setUiProducts(data);
            });
    }, []);
    //get data from local storage using 'utilities file' function
    useEffect(() => {
        const saveCart = getStoredCart();
        if (products.length) {
            const storedCart = [];
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);
                storedCart.push(addedProduct);
            }
            setCart(storedCart);
        }
    }, [products]);

    const handleClick = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        //save to local storage
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const availableProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setUiProducts(availableProducts);
        console.log(availableProducts);
    }
    if (products.length !== 0) {
        return (
            <>
                <div className='search-container'>
                    <input type="text" placeholder='search product' onChange={handleSearch} />
                </div>
                <div className='shop-container'>
                    <div className="product-container">

                        {
                            uiProducts.map(product => <Product product={product} key={product.key} handleClick={handleClick}></Product>)
                        }

                    </div>
                    <div className="cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </>
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