import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = "http://localhost:5000/products";
        let reponse = await fetch(url);
        let data = await reponse.json();
        console.log(data);
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="product-card-box">
            {productList.map((item, index) => (
                <ProductCard key={index} item={item} />
            ))}
        </div>
    );
};

export default ProductAll;
