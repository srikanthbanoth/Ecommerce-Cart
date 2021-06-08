import React from 'react'
// import dish from './dish.svg';
import './Nav.css';
import {Link} from "react-router-dom";
function Nav() {
    return (
        <div className="header">
                
            <ul className="links">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <li><h2>Shopaholic</h2></li>
                </Link>
                <Link to="/" style={{ textDecoration: 'none',color:'white'}}>
                    <li>Home</li>
                </Link>
                <Link to="/shop" style={{ textDecoration: 'none' ,color:'white'}}>
                    <li>Shop</li>
                </Link>
                <Link to="/cart" style={{ textDecoration: 'none',color:'white' }}>
                    <li>Cart</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav
