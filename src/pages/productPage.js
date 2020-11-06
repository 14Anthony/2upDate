import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Container } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductPage = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id)
    return (
        <>
            <Link className='btn btn-grey my-3 ' to='/'>
                Home
        </Link>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush' >
                            <ListGroup.Item>
                                <h2>{product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Some Peopler Like it?:</strong>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews}`} />
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <strong>Project Description:</strong> <br></br><br></br> {product.description}
                            </ListGroup.Item>


                        </ ListGroup>

                    </Col>
                </Row>

            </Container>
        </ >
    )
}

export default ProductPage
