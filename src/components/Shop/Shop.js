import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log('Products received');
            });
    }, []);


    useEffect(() => {
        console.log('LocalStorage Cart Called')
        // console.log(savedCart);
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key);
                // console.log(products);
                const addedProduct = products.find(product => product.key === key);
                storedCart.push(addedProduct);
                // console.log(key, addedProduct);
            }
            setCart(storedCart);
        }
    }, [products])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        //save to localStorage
        addToDb(product.key)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>Product: {products.length}</h3> */}
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;