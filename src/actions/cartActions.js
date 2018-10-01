import * as constants from "../constants";

//cart

export function increaseTotal(priceForCat) {
    return {
        type: constants.INCREASE_TOTAL,
        payload: {
            priceForCat
        }
    };
}
export function decreaseTotal(priceForCat) {
    return {
        type: constants.DECREASE_TOTAL,
        payload: {
            priceForCat
        }
    };
}

export function substractFromTotalPrice(price) {
    return {
        type: constants.SUBSTRACT_FROM_TOTAL_PRICE,
        payload: {
            price
        }
    };
}

export function fetchingCatsStarted () {
    return{
        type: constants.FETCHING_CATS_STARTED
    }
}
export function fetchingCatsSuccess (data) {
    return {
        type: constants.FETCHING_CATS_SUCCESS,
        payload: {
            data
        }
    }
}
export function fetchingCatsError (error) {
    return {
        type: constants.FETCHING_CATS_ERROR,
        payload: {
            error
        }
    }
}
export function getCatsFromApi () {
    return (dispatch) => {
        dispatch(fetchingCatsStarted());
        fetch("http://5b83b45a5118040014cd6cfa.mockapi.io/cart/kittenForSale1")
            .then(resp => resp.json())
            .then(data => dispatch(fetchingCatsSuccess(data)))
            .catch(error => dispatch(fetchingCatsError(error)));
    }
}

//shipping

export function setFreeShipping () {
    return {
        type: constants.SET_FREE_SHIPPING,
    }
}

export function chooseShipping (option) {
    return {
        type: constants.CHOOSE_SHIPPING,
        payload: {
            option
        }
    }
}