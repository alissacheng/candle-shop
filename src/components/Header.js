import React from "react";
import "../App.css";

const Header = (props) => {
    return(
        <div className='header'>
            <h1>Alissa's Candle Shop</h1>
            <nav className="main-nav">
                <ul>
                    <li className="nav-item">
                        <a href="https://www.google.ca" className="nav-link">Browse Candles</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.google.ca" className="nav-link">Your Favourites</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.google.ca" className="nav-link">Your Orders</a>
                    </li>
                </ul>
                <button>Cart</button>
            </nav>
        </div>
    )
}

export default Header