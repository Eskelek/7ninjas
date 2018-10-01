import React from 'react';
import '../App.css';
import CatForSale from "./CatForSale";
import {Link} from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';
import * as actions from '../actions/cartActions'
import CatBone from './CatBone' 

class CartComponent extends React.Component {
    constructor(props){
        super(props);
    };
    
    deletePriceForCat = (price) => {
        this.props.substractFromTotalPrice(price)
    }
    
    increaseTotalPrice = (priceForCat) => {
        this.props.increaseTotal(priceForCat)
    }
    
    decreaseTotalPrice = (priceForCat) => {
        this.props.decreaseTotal(priceForCat)
    }
    
    componentDidMount() {
        this.props.getCatsFromApi();
    }
    
    
    catsToCat = cat => {
        return <CatForSale deletePriceForCat={this.deletePriceForCat} increaseTotal = {this.increaseTotalPrice} decreaseTotal = {this.decreaseTotalPrice} id={cat.id} title = {cat.title} description={cat.description} imgAdress = {cat.imgAdress} price = {cat.price} />
        
    }
    
    
    render() {
        let bone
        let loading = this.props.isLoading
        if(loading) {
            bone= <CatBone />
        }
        
        let errorInfo
        let apiError = this.props.isError
        if(apiError) {
            errorInfo = <h1>Something went wrong! Try again.</h1>
        }
        return (
            <div className="cartWindow">
                {bone}
                {errorInfo}
                <ul className="listOfCats">
                    {this.props.kittenForSale.map(this.catsToCat)}
                </ul>
                <div className = "summary">
                    <p>{this.props.totalPrice} €</p>
                    <Link to="/shipping">
                        <button>BUY</button>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCatsFromApi: () => dispatch(actions.getCatsFromApi()),
        substractFromTotalPrice: (price) => dispatch(actions.substractFromTotalPrice(price)),
        increaseTotal: (priceForCat) => dispatch(actions.increaseTotal(priceForCat)),
        decreaseTotal: (priceForCat) => dispatch(actions.decreaseTotal(priceForCat))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);