import React from "react";

const ProductCard = ({ item }) => {
    return (
        <div className="product-card">
            <img src={item.img} alt="" width={"100%"} />
            <div>{item?.new ? "new" : ""}</div>
            <div>{item?.choice ? "choice" : ""}</div>
            <div>{item?.title}</div>
            <div>{item?.price.toLocaleString()}</div>
        </div>
    );
};

export default ProductCard;
