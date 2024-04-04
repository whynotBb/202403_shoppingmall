import {createSlice} from '@reduxjs/toolkit';
let initialState = {
    id: '',
    password: '',
    authenticate: false,
};

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState,
    // reducer 동기적으로 바로 변경 된 state 값을 반영하는 아이들
    reducers: {
        loginSuccess: (state, action) => {
            const {id, password} = action.payload;
            state.id = id;
            state.password = password;
            state.authenticate = true;
        },
        logout: (state) => {
            state.authenticate = false;
        },
    },
});
export const {loginSuccess, logout} = authenticateSlice.actions;
export default authenticateSlice.reducer;
