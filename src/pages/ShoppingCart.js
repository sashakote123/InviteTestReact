//import { productsList } from "../components/product lists/prouctLists";

import ProductInShoppingCart from "../components/productInShoppingCart/ProductInShoppingCart";

import React, { useState, useEffect } from 'react';


const ShoppingCart = () => {

    let storedProductsList = localStorage.getItem('productsList');
    let productsList = JSON.parse(storedProductsList);

    let tmp = productsList.slice()
    for (let product of tmp) {
        product.counter = 1;
    }


    const [productsListNew, setProductsListNew] = useState(tmp);

    const incrementCount = () => {
        setProductsListNew(prevItems => {
            return [...prevItems];
        });
    };


    let sum = 0;
    for (let item of productsListNew) {
        sum += item.counter * item.price
    }


    const minusButtons = document.querySelectorAll('.minus-btn');
    const plusButtons = document.querySelectorAll('.plus-btn');

    for (let minusBtn of minusButtons) {
        let name = minusBtn.parentElement.parentElement.parentElement.querySelector('.item-name').textContent
        minusBtn.onclick = () => {
            let product = productsListNew.find(item => item.title === name);
            if (product.counter > 1)
                product.counter--;
        }
    }

    for (let plusBtn of plusButtons) {
        let name = plusBtn.parentElement.parentElement.parentElement.querySelector('.item-name').textContent
        plusBtn.onclick = () => {
            let product = productsListNew.find(item => item.title === name);
            product.counter += 1;
        }
    }


    useEffect(() => {
        localStorage.setItem('productsList', JSON.stringify(productsListNew));
    }, [productsListNew]);



    return (
        <section className="section-shoppigcar">
            <div className="container container-cart">
                <div className="product-raw">
                    <h2 className="shoppigcar-title">
                        Корзина
                    </h2>
                    <ul className="cart-list">
                        {
                            productsListNew.map((product, index) => {
                                if (product.inShoppingCart)
                                    return (
                                        <ProductInShoppingCart plusBtn={() => incrementCount()} minusBtn={() => incrementCount()} key={index} title={product.title} imgSmall={product.imgSmall} price={product.price} counter={product.counter} />
                                    )
                            })
                        }

                    </ul>
                </div>
                <div className="total">
                    <div className="total-raw">
                        <div className="total-title">ИТОГО</div>
                        <div className="total-price">₽ {sum}</div>
                    </div>
                    <button className="buy-btn-big">Перейти к оформлению</button>
                </div>
            </div>


        </section>
    );
}

export default ShoppingCart;