function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/whynotBb/202403_shoppingmall/products?q=${searchQuery}`;
        let reponse = await fetch(url);
        let data = await reponse.json();
        // setProductList(data);
        console.log(data);
    };
}

export const productAction = { getProducts };
