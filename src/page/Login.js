import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        setAuthenticate(true);
        navigate('/');
    };
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <Form onSubmit={(e) => login(e)}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' label='Check me out' />
                        </Form.Group>
                        <Row className='justify-content-center'>
                            <Button variant='secondary' type='submit'>
                                log in
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
