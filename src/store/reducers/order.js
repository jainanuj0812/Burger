import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const fetchOrdersStart = (state, action) => {
    const updatedState = {
        loading: true
    };
    return updateObject(state, updatedState);
};

const fetchOrdersSuccess = (state, action) => {
    const updatedState = {
        loading: false,
        orders: action.orderData
    };
    return updateObject(state, updatedState);
};

const fetchOrdersFailed = (state, action) => {
    const updatedState = {
        loading: false,
    };
    return updateObject(state, updatedState);
};

const purchaseInit = (state, action) => {
    const updatedState = {
        purchased: false
    };
    return updateObject(state, updatedState);
};

const purchaseBurgerStart = (state, action) => {
    const updatedState = {
        loading: true
    };
    return updateObject(state, updatedState);
};

const purchaseBurgerSuccess = (state, action) => {
    const updatedState = {
        loading: false,
        purchased: true
    };
    return updateObject(state, updatedState);
};

const purchaseBurgerFailed= (state, action) => {
    const updatedState = {
        loading: false
    };
    return updateObject(state, updatedState);
};

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);
            break;
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);
            break;
        case actionTypes.FETCH_ORDERS_FAILED:
            return fetchOrdersFailed(state, action);
            break;
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);
            break;
        case actionTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state, action);
            break;
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
            break;
        case actionTypes.PURCHASE_BURGER_FAILED:
            return purchaseBurgerFailed(state, action);
            break;
        default:
            return state;
    }
};

export default reducer;

