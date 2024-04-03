import {applyMiddleware, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from '@redux-devtools/extension';

import {configureStore} from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import authenticateReducer from './reducers/authenticateReducer';
// ㄴ> 업그레이드 되면서, combineReducer / thunk / middleware / devtool 이 들어가있어,
// 추가로 환경설정 해주지 않아도 됨

// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReducer,
    },
});

export default store;
