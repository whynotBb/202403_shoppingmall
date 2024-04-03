import {productActions} from '../reducers/productSlice';

// function getProducts(searchQuery) {
//     return async (dispatch) => {
//         let url = `https://my-json-server.typicode.com/whynotBb/202403_shoppingmall/products?q=${searchQuery}`;
//         let reponse = await fetch(url);
//         let data = await reponse.json();
//         console.log(data);
//         //dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
//         dispatch(productActions.getAllProducts({ data }));
//     };
// }

// function getProductDetail(id) {
//     console.log("!!", id);
//     return async (dispatch) => {
//         let url = `https://my-json-server.typicode.com/whynotBb/202403_shoppingmall/products/${id}`;
//         let reponse = await fetch(url);
//         let data = await reponse.json();
//         console.log(data);
//         dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
//     };
// }

// export const productAction = {getProductDetail};
