import {configureStore} from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import authenticateSlice from './reducers/authenticateSlice';
// ㄴ> 업그레이드 되면서, combineReducer / thunk / middleware / devtool 이 들어가있어,
// 추가로 환경설정 해주지 않아도 됨

// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
    reducer: {
        auth: authenticateSlice,
        product: productSlice,
    },
});

export default store;
