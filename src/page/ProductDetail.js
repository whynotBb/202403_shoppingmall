import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    let { id } = useParams();
    console.log("params", id);
    const [product, setProduct] = useState();
    const getProducts = async () => {
        let url = `https://my-json-server.typicode.com/whynotBb/202403_shoppingmall/products?id=${id}`;
        console.log(url);
        let reponse = await fetch(url);
        let data = await reponse.json();
        console.log(data);
        setProduct(data);
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <Container>
            {product && (
                <Row>
                    <Col>
                        <img src={product[0].img} alt="" />
                    </Col>
                    <Col>
                        <p>{product[0].new && "new"}</p>
                        <h3>{product[0].title}</h3>
                        <p>{product[0].choice && "choice"}</p>
                        <h4>₩{product[0].price.toLocaleString()}</h4>
                        <Form.Select aria-label="Size">
                            <option>Size</option>
                            {product[0].size.map((item, index) => (
                                <option key={index} value={index}>
                                    {item}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default ProductDetail;
