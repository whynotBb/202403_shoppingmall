import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

const ProductDetail = () => {
    let {id} = useParams();
    console.log('params', id);
    const [product, setProduct] = useState();
    const getProducts = async () => {
        let url = `https://my-json-server.typicode.com/whynotBb/202403_shoppingmall/products/${id}`;
        console.log(url);
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProduct(data);
    };
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container>
            {product && (
                <Row>
                    <Col lg={6}>
                        <img src={product.img} alt='' width={'100%'} />
                    </Col>
                    <Col className='product_detail_info'>
                        <p>
                            {product.new && '✨new'} {product.choice && '👍 choice'}
                        </p>
                        <h3>{product.title}</h3>
                        <h4>₩{product.price.toLocaleString()}</h4>
                        <Form.Select aria-label='Size'>
                            <option>Size</option>
                            {product.size.map((item, index) => (
                                <option key={index} value={index}>
                                    {item}
                                </option>
                            ))}
                        </Form.Select>
                        <Button variant='secondary'>add</Button>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default ProductDetail;
