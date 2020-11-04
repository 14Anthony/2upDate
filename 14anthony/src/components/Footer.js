import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer>
            <Container bg="primary" variant="primary" expand="lg">

                <Row>

                    <Col className='text-left py-10'>Belcastt@live.com</Col>
                    <Col className='text-center py-10'>A Journey in to Coding</Col>
                    <Col className='text-right py-10'>Phone: 775.455.1711</Col>

                </Row>

            </Container>
        </ footer>
    )
}

export default Footer
