
import './style.css';

import { NavLink } from 'react-router-dom';
import like from './../../source/icons/like.svg';
import shoppingCart from './../../source/icons/cart.svg';



import React, { useState, useEffect } from 'react';

const NavBar = ({ nullBtn }) => {

    //let storedProductsList = localStorage.getItem('productsList');
    //let productsList = JSON.parse(storedProductsList);



    return (
        <nav>
            <div className="container">
                <div className="nav-raw">
                    <NavLink to="/">
                        <div className="nav-logo" onClick={nullBtn}>
                            QPICK
                        </div>
                    </NavLink>

                    <div className="nav-buttons">
                        <div className="likes" data-content="2">
                            <a href="#!"><img src={like} alt="like" /></a>
                        </div>
                        <NavLink to={'/ShoppingCart'}>
                            <div className="shoppingcart" data-content='0'>
                                <img src={shoppingCart} alt="cart" />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar
