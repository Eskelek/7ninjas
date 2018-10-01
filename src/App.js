
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import logo from "./images/logo.png";
import CartComponent from './components/CartComponent.js';
import ShippingComponent from './components/ShippingComponent.js';


class App extends Component {
    constructor(props){
        super(props);
    };
    
    render() {
        return (
            <div className="MainComponent">
                <header>
                    <img src={logo} alt="logo"/>
                    <h1>Front-End Developer<span>.</span></h1>
                </header>
                <Router>
                    <div>
                        <Link to="/cart">
                            <button className="toCart">Go to Cart</button>
                        </Link>
                        <Route path="/cart" component={CartComponent} />
                        <Route path="/shipping" component={ShippingComponent} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
