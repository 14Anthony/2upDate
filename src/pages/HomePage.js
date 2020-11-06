import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';


const HomePage = () => {
    return (

        <Container>
            <h1>The BootCamp Journey Look Back</h1>
            <Row>
                {products.map(product => (
                    // this needs to be a mobile first application so maybe we should just keep it consistent throughout, I am putting this here for copy and paste needs we will have the small devices take up 12 column, medium devices we can take up 6 , large screens take up four columns and lets have extra large screens take up 3 
                    <Col sm={12} md={8} lg={4} xl={4}>
                        {/* we will need somekind of component that renders just the photos as we loop thru the products.js */}
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default HomePage
