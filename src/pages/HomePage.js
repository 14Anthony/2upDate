import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const HomePage = () => {
    return (
        <>
            <h1>Latest Projects</h1>
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lg={6} xl={4}>

                        <Product product={product} />

                        {/* <Product product={product} /> */}
                        {/* <h3>{project.name}</h3> */}

                    </Col>
                ))}
            </Row>

        </>
    )
}

export default HomePage