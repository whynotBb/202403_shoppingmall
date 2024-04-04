import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {loginSuccess} from '../redux/reducers/authenticateSlice';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const login = (e) => {
        e.preventDefault();
        dispatch(loginSuccess({id, password}));
        navigate('/');
    };
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <Form onSubmit={(e) => login(e)}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                onChange={(e) => setId(e.target.value)}
                            />
                            <Form.Text className='text-muted'>We'll never share your email with anyone else</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
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
