import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
let initialState = {
    productList: [],
    productDetailList: null,
    isLoading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/whynotBb/202403_shoppingmall/products?q=${searchQuery}`;
        let reponse = await fetch(url);
        return await reponse.json();
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});
export const fetchSingleProduct = createAsyncThunk('product/fetchSingleProduct', async (id, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/whynotBb/202403_shoppingmall/products/${id}`;
        let reponse = await fetch(url);
        return await reponse.json();
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    // reducer 동기적으로 바로 변경 된 state 값을 반영하는 아이들
    reducers: {},
    //extraReducers thunk 등 외부 라이브러리를 호출하는 reducer 들을 써줌 / api 호출 등
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchSingleProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productDetailList = action.payload;
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
console.log('props', productSlice);

export const productActions = productSlice.actions;

export default productSlice.reducer;
