import {combineReducers} from 'redux';
import authenticateReducer from './authenticateReducer_BU';
import productReducer from './productSlice';

export default combineReducers({
    auth: authenticateReducer,
    product: productReducer,
});
