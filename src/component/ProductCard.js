import React from "react";

const ProductCard = ({ item }) => {
    return (
        <div>
            <img src={item.img} alt="" width={400} />
            <div>{item?.new ? "new" : ""}</div>
            <div>{item?.choice ? "choice" : ""}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
        </div>
    );
};

export default ProductCard;
