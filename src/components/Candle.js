import {useEffect, useState} from 'react';
import React from "react";
import "../App.css";
import candle from "../images/champagne-toast.jpg";

const Candle = ({setCandleProp}) => {
    const [count, setCount] = useState(0) 

    function decrement() {
        if(count>0){
            setCount(num => num-1)
        }
    }

    function increment() {
        setCount(num => num+1)
    }

    return(
        <div className='candle-item'>
            <img src={candle} alt="Champagne toast candle"/>
            <h2 className="candle-name">Champagne Toast</h2>
            <p className="candle-desc">This is a beautiful cozy scent, ideal for spring or summer. It contains rose, lavender and chamamoille.</p>
            <div className='add-cart'>
            <div className="cart-counter">
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={()=> setCandleProp("champagne toast", count)}>+ Add to Cart</button>
        </div>
        </div>
    )
}

export default Candle;