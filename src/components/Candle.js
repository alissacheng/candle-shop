import {useEffect, useState} from 'react';
import React from "react";
import "../App.css";

const Candle = ({setCandleProp, candleType}) => {
    const [count, setCount] = useState(0)
    const [review, setReview] = useState(0)

    function parseCandle () {
        const candleTitleArr = candleType.split("-")
        let candleTitle = "";
            
        candleTitleArr.forEach((word, wordNum)=> {
            const wordArr = word.split("");
            wordArr[0] = word.split('')[0].toUpperCase();
            const oneWord = wordArr.join("")
            if(wordNum === (candleTitle.length - 1)) {
                candleTitle += oneWord
            }else {
                candleTitle += `${oneWord} `
            }
        })

        return candleTitle;
    }

    const reviewItem = (star) => {
        const ratingArr = [1, 2, 3, 4, 5]
        const starRating = parseInt(star.split("-")[1])
        ratingArr.forEach((num)=> {
            const starId = "star-" + num
            document.getElementById(starId).classList.remove("checked");
            if ( num <= starRating) {
                document.getElementById(starId).classList.add("checked");
            }
        })

        setReview(starRating)
    }

    useEffect(()=>{
        console.log(`Your review of ${parseCandle()} is ${review} stars`)
    },[review])

    // function removeStar() {
    //     const ratingArr = [1, 2, 3, 4, 5]
    //     ratingArr.forEach((num)=> {
    //         const starId = "star-" + num
    //         document.getElementById(starId).classList.remove("checked");
    //     })
    // }


    function decrement() {
        if(count>0) {
            setCount(num => num-1)
        }
    }

    function increment() {
        setCount(num => num+1)
    }

    return(
        <div className='candle-item'>
            <img src={`./${candleType}.jpg`} alt="Champagne toast candle"/>
            <h2 className="candle-name">{parseCandle()}</h2>
            <div className="rating">
                <button onClick={()=>reviewItem("star-1")}><span className="fa fa-star" id="star-1"></span></button>
                <button onClick={()=>reviewItem("star-2")}><span className="fa fa-star" id="star-2"></span></button>
                <button onClick={()=>reviewItem("star-3")}><span className="fa fa-star" id="star-3"></span></button>
                <button onClick={()=>reviewItem("star-4")}><span className="fa fa-star" id="star-4"></span></button>
                <button onClick={()=>reviewItem("star-5")}><span className="fa fa-star" id="star-5"></span></button>
            </div>
            <div className='add-cart'>
                <div className="cart-counter">
                    <button onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button onClick={increment}>+</button>
                </div>
                <button onClick={()=> setCandleProp(candleType, count)}>+ Add to Cart</button>
            </div>
        </div>
    )
}

export default Candle;