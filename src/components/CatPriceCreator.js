import React from 'react';
import '../App.css';

class CatPriceCreator extends React.Component {
    constructor(props){
        super(props);
    };
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.catPrice != this.props.catPrice) {
            if(nextProps.catPrice > this.props.catPrice) {
                this.props.increaseTotal(this.props.catPriceForOne)
            } else {
                this.props.decreaseTotal(this.props.catPriceForOne)
            }
            
        }
    }
    render() {
        return (
            <div className="catPriceCreator"> 
                <i onClick={this.props.deleteWholeCatItem} className="far fa-trash-alt"></i>
                <div className="quantityAndPrice">
                    <div className="quantity">
                        <button className="catRemove" onClick={this.props.removeSomeCat} > - </button>
                        <p>{this.props.quantity}</p>
                        <button className="catAdd" onClick={this.props.addSomeCat}> + </button>
                    </div>
                    <p className="priceForRow">{this.props.catPrice} €</p>
                </div>
            </div>
        );
    }
}

export default CatPriceCreator;