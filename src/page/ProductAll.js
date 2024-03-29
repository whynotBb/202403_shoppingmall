import React, {useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';
import {Col, Container, Row} from 'react-bootstrap';
import {useNavigate, useSearchParams} from 'react-router-dom';

const ProductAll = () => {
    // query 값 가져오기 => 사용 : query.get('@')
    const [query] = useSearchParams();

    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let searchQuery = query.get('q');
        if (searchQuery === null) {
            searchQuery = '';
        } else {
            searchQuery = query.get('q');
        }
        let url = `https://my-json-server.typicode.com/whynotBb/202403_shoppingmall/products?q=${searchQuery}`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(searchQuery, url, data);
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const productDetail = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item, index) => (
                        <Col lg={3} key={index} onClick={() => productDetail(item.id)}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
