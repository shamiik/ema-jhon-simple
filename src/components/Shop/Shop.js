import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
                // console.log('Products received');
            });
    }, []);


    useEffect(() => {
        // console.log('LocalStorage Cart Called')
        // console.log(savedCart);
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key);
                // console.log(products);
                console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    console.log(addedProduct);
                    storedCart.push(addedProduct);
                }

                // console.log(key, addedProduct);
            }
            setCart(storedCart);
        }
    }, [products])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        //save to localStorage
        addToDb(product.key);
    }

    const handleSearch = event => {
        // console.log(event.target.value)
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }
    return (

        <>
            <div className='search-container'>
                <input type="text"
                    onChange={handleSearch}
                    placeholder="search Product" />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {/* <h3>Product: {products.length}</h3> */}
                    {
                        displayProducts.map(product => <Product
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
        </>
    );
};

export default Shop;