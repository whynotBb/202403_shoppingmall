import React, {useEffect} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {productAction} from '../redux/actions/productAction';

const ProductDetail = () => {
    let {id} = useParams();
    console.log('params', id);
    const product = useSelector((state) => state.product.productDetailList);
    const dispatch = useDispatch();
    const getProducts = async () => {
        console.log('here', id);
        dispatch(productAction.getProductDetail(id));
    };
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(product);
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
