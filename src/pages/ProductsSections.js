
import { productsList } from "../components/product lists/prouctLists";
import Product from "../components/product/Product";
import React, { useState, useEffect } from 'react';

const ProductsSections = () => {

    
    const buyBtn = document.querySelectorAll('.buy-btn');

    for (let btn of buyBtn) {
        btn.onclick = () => {
            let name = btn.parentElement.parentElement.querySelector('.product-title').firstChild.textContent
            let product = productsList.find(item => item.title === name);
            product.inShoppingCart = true;
            let elem = document.querySelector('.shoppingcart');
            
            if(btn.textContent === 'В корзине'){
                product.inShoppingCart = false;
                btn.textContent = 'Купить';
                elem.dataset.content --;
            }else{
                btn.textContent = 'В корзине';
                elem.dataset.content ++;
            }
            //console.clear();
            console.log(product.inShoppingCart);
            localStorage.setItem('productsList', JSON.stringify(productsList));
        }
    }
    

    const [ProductsListNew, setProductsListNew] = useState(productsList);

    function toggleShoppingCart() {
        setProductsListNew(prevItems => {
            return [...prevItems];
        });
    }



    return (
        <>

            <section className="section-products">
                <div className="container">

                    <h2 className="section-title">
                        Наушники
                    </h2>

                    <ul className="products-list">
                        {
                            ProductsListNew.map((product, index) => {
                                if (product.type === 'headphones')
                                    return (
                                        <Product inShoppingCart={product.inShoppingCart} buyBtn={()=>toggleShoppingCart()} key={index} title={product.title} img={product.img} price={product.price} oldPrice={product.oldPrice} score={product.score} />


                                    )
                            })
                        }
                    </ul>


                </div>
            </section>


            <section className="section-products">
                <div className="container">

                    <h2 className="section-title">
                        Беспроводные наушники
                    </h2>

                    <ul className="products-list">
                        {
                            productsList.map((product, index) => {
                                if (product.type === 'wirelessHeadphones')
                                    return (
                                        <Product key={index} title={product.title} img={product.img} price={product.price} oldPrice={product.oldPrice} score={product.score} />
                                    )
                            })
                        }
                    </ul>


                </div>
            </section>
        </>
    );
}

export default ProductsSections;


