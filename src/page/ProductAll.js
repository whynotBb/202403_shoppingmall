import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductAll = () => {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        // let url = "http://localhost:5000/products";
        let url =
            "https://my-json-server.typicode.com/whynotBb/202403_shoppingmall/products";
        let reponse = await fetch(url);
        let data = await reponse.json();
        console.log(data);
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, []);
    const productDetail = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item, index) => (
                        <Col
                            lg={3}
                            key={index}
                            onClick={() => productDetail(item.id)}
                        >
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
