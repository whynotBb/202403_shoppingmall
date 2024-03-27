import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

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
        <div>
            <Container>
                <Row>
                    {productList.map((item, index) => (
                        <Col lg={3} key={index}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
