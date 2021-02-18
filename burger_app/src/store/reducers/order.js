import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    order: [],
    loading: false,
    purchased: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false,
            }

        case actionsTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };
        case actionsTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            };
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.order.concat(newOrder)
            };
        case actionsTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,

            };
        default:
            return state;
    }
};

export default reducer;