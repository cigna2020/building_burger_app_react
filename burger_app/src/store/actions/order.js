import * as actionsTypes from './actionsTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionsTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionsTypes.PURCHASE_BURGER_FAIL,
        error: error,
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionsTypes.PURCHASE_BURGER_START,
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response.data)
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
}