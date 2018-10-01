import React from 'react';
import '../App.css';
import CatInfo from "./CatInfo";
import CatPriceCreator from "./CatPriceCreator";

class CatForSale extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity: 1,
            price: this.props.price,
            catPriceForOne: this.props.price,
            removeMe: false
        }
    };
    
    createPriceForCat = () => {
        this.setState ({
            price: this.props.price * this.state.quantity
        })
    }
    
    addSomeCat = (e) => {
        if(this.state.quantity == 100) {
            return null
        }

        this.setState ({
            price: this.props.price * (this.state.quantity + 1),
            quantity: this.state.quantity + 1
        })
    };
    
    removeSomeCat = (e) => {
        
        if(this.state.quantity == 0) {
            return null
        }
        console.log()
        this.setState ({
            price: this.props.price * (this.state.quantity - 1),
            quantity: this.state.quantity -1
        })
        
        
    };
    
    deleteWholeCatItem = () => {
        this.setState({
            removeMe: true
        })
        this.props.deletePriceForCat(this.state.price)
    }
    
    render() {
        if(this.state.removeMe) {
            return null
        }
        return (
            <div className="catForSale">
                <CatInfo 
                    title = {this.props.title}
                    description = {this.props.description}
                    imgAdress = {this.props.imgAdress}
                />
                <CatPriceCreator
                    increaseTotal = {this.props.increaseTotal}
                    decreaseTotal = {this.props.decreaseTotal}
                    deleteWholeCatItem={this.deleteWholeCatItem}
                    addSomeCat = {this.addSomeCat}
                    removeSomeCat = {this.removeSomeCat}
                    quantity = {this.state.quantity}
                    catPrice = {this.state.price}
                    catPriceForOne = {this.state.catPriceForOne}
                />
            </div>
        );
    }
}

export default CatForSale;