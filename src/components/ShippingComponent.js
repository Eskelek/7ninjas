import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../actions/cartActions'

class ShippingComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phoneValue: "",
            nameLengthError: false,
            numberError: false,
            nameIsValidate: false,
            adressIsValidate: false,
            adressError: false,
            numberIsValidate: false,
            emailValidate: false,
            emailError: true,
            payable: true
        } 
    };
    
    componentDidMount() {
        this.props.setFreeShipping();
    }
    
    selectChange = (e) => {
        const option = e.target.value
        this.props.chooseShipping(option)
    }
    
    changeEmailValue = (e) => {
        this.setState({
            emailValue: e.target.value
        })
    }
    
    checkEmail = (e) => {
        let email = e.target.value
        let filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if (filter.test(email)) {
            this.setState({
                emailValidate: true,
                emailError: true
            })
        } else {
            this.setState({
                emailValidate: false,
                emailError: false
            })
        }
    }
    
    doNothing = (e) => {
        e.preventDefault();
    }
    
    changePhoneValue = (e) => {
        const x = e.target.value;
        const xLength = x.toString().length
        
        if(isNaN(x)) {
            return false
        }else if(xLength > 9  ) {
            return false
        }else {
            this.setState({
                phoneValue: x
            })
        }
    }
    
    checkNumber = (e) => {
        if(e.target.value.length == 9) {
            this.setState({
                numberIsValidate: true,
                numberError: false
            })
        } else {
            this.setState({
                numberError: true,
                numberIsValidate: false
            })
        }
    }
    checkAdress = (e) => {
        if(e.target.value.length > 1) {
            this.setState({
                adressIsValidate: true,
                adressError: false
            })
        } else {
            this.setState({
                adressIsValidate: false,
                adressError: true
            })
        }
    }
    
    checkNameLength = (e) => {
        if(e.target.value.length < 3) {
            this.setState({
                nameLengthError: true,
                nameIsValidate: false,
            })
        } else {
            this.setState({
                nameIsValidate: true,
                nameLengthError: false
            })
        }
    }
    
    render() {
        let nameError
        if(this.state.nameLengthError) {
            nameError = <label>Invalid Name! minimum 3 chars</label>
        }
        
        let emailError
        if(!this.state.emailError) {
            emailError = <label>Invalid e-mail!</label>
        }
        
        let numberError
        if(this.state.numberError) {
            numberError = <label>Invalid Number!</label>
        }
        
        let adressError
        if(this.state.adressError) {
            adressError = <label>Invalid Adress!</label>
        }
        
        let cantPay = true
        if(this.state.nameIsValidate && this.state.adressIsValidate && this.state.emailValidate){
            cantPay = false;
        }
        return (
            <div className="cartWindow shipping">
                <form>
                    <div className="formCell">
                        <p>Name*</p>
                        <input type="text" pattern=".{3,}" onBlur={this.checkNameLength}/>
                        {nameError}
                    </div>
                    <div className="formCell">
                        <p>Adress*</p>
                        <input type="text" pattern=".{2,}" onBlur={this.checkAdress}/>
                        {adressError}
                    </div>
                    <div className="formCell">
                        <p>Phone</p>
                        <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="+ 48" value={this.state.phoneValue} onChange={this.changePhoneValue} onBlur={this.checkNumber} />
                        {numberError}
                    </div>
                    <div className="formCell">
                        <p>E-mail*</p>
                        <input onChange={this.changeEmailValue} onBlur={this.checkEmail} type="email" placeholder="some@email.com"/>
                        {emailError}
                    </div>
                    <div className="formCell">
                        <p>Shipping options</p>
                        <select value={this.props.shippingOption} onChange={this.selectChange}>
                            <option value="ninjPost">ninjPost -  FREE SHIPPING</option>
                            <option value="D7L">D7L -  15.99 pln</option>
                            <option value="7post">7post -  7.99 pln</option>
                        </select> 
                    </div>
                    <button onClick={this.doNothing} type="submit" disabled = {cantPay}>PAY</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFreeShipping: () => dispatch(actions.setFreeShipping()),
        chooseShipping: (option) => dispatch(actions.chooseShipping(option)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShippingComponent);