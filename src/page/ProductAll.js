import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch } from "react-redux";

const ProductAll = () => {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [productList, setProductList] = useState([]);
    const dispatch = useDispatch();
    const getProducts = () => {
        let searchQuery = query.get("q") || "";
        dispatch(productAction.getProducts(searchQuery));
    };
    useEffect(() => {
        getProducts();
    }, [query]);
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
