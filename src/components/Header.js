import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, } from 'react-bootstrap';


const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>

                <Container>

                    <LinkContainer to='/'>

                        <Navbar.Brand bg="light" variant="blue" href="/">14Anthony Portfolio</Navbar.Brand>

                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/'>
                                <Nav.Link ><i className="fas fa-hotel"></i>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className="far fa-lightbulb"></i>Project</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>




                </Container>

            </Navbar>
        </header>
    )
}

export default Header
