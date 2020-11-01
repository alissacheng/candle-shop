import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Candle from "./components/Candle"

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      eamil: null,
      emailFirebase: null,
      cart: [],
      reviews: []
    }
  }


  addToCart = (candleType, count) => {
    const candleOrder = [];

    const singleCandle = {
      candleType: candleType,
      quantity: count
    };

    candleOrder.push(singleCandle)
//Update the state for photos
    this.setState({
        cart: candleOrder
    });
  }

  render() {
    return (
      <div className="main">
        <Header
        />
        <Candle
          setCandleProp={this.addToCart}
          candleType="champagne-toast"
        />
      </div>
    ); 
  }
}

export default App;
