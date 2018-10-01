import * as constants from "../constants"


const initialState = {
    shippingPrice: 0,
    totalPrice: 0,
    kittenForSale: [],
    isLoading: false,
    isError: false,
    errorValue: "",
    shippingOption: "7post",
    actualQuantityOfCats: 0
}


export function cartReducer(state = initialState, action) {
    switch(action.type) {
        case constants.INCREASE_TOTAL:
            return {
                ...state, totalPrice: state.totalPrice + action.payload.priceForCat
            };
            
        case constants.DECREASE_TOTAL:
            return {
                ...state, totalPrice: state.totalPrice - action.payload.priceForCat
            };
            
        case constants.SUBSTRACT_FROM_TOTAL_PRICE:
            return {
                ...state, totalPrice: state.totalPrice - action.payload.price, actualQuantityOfCats: state.actualQuantityOfCats - 1
            };
    
        case constants.FETCHING_CATS_STARTED:
            return {...state, isLoading: true}
            
        case constants.FETCHING_CATS_SUCCESS:
            const priceData = action.payload.data.reduce( function(sumOfPrice, el){ return sumOfPrice + el.price; }, 0)
            return {...state, isLoading: false, kittenForSale: action.payload.data, totalPrice: priceData, actualQuantityOfCats: action.payload.data.length }
            
        case constants.FETCHING_CATS_ERROR:
            return {...state, isLoading: false, isError: true }
        
        case constants.SET_FREE_SHIPPING:
            const actualTotal = state.totalPrice
            const actualQuantity = state.actualQuantityOfCats
            if(actualTotal > 200 || actualQuantity > 3) {
                return {
                    ...state, shippingOption: "ninjPost"
                };
            } else {
                return {
                    ...state, shippingOption: "7post"
                }
            }
            
        case constants.CHOOSE_SHIPPING:
            if(action.payload.option == "ninjPost"){
                if(state.totalPrice > 200 || state.actualQuantityOfCats > 3) {
                    return {
                        ...state, shippingOption: action.payload.option, shippingPrice: 0 
                    };
                } else {
                    return {
                        ...state
                    }
                }
            } else if(action.payload.option == "7post"){
                return {
                    ...state, shippingOption: action.payload.option, shippingPrice: 7.99
                };
            } else {
                return {
                    ...state, shippingOption: action.payload.option, shippingPrice: 15.99
                };
            }
            
        default:
            return state;
    }
}