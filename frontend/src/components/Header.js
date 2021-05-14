import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
     
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
        <LinkContainer to='/'>
            <Navbar.Brand >ProShop</Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
          
            <Nav className='ms-auto'>
              
              <LinkContainer to="/cart">
                <Nav.Link>
                <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/login">
                <Nav.Link >
                <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;

// 
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css



