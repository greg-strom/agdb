import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>AGDb</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/about">
              <Nav.Link>about the AGDb</Nav.Link>
            </LinkContainer>
            <NavDropdown title="the Darmstadt School" id="basic-nav-dropdown">
              <LinkContainer to="/composers/Boulez">
                <NavDropdown.Item>Pierre Boulez</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/composers/Stockhausen">
                <NavDropdown.Item>Karlheinz Stockhausen</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/composers/Nono">
                <NavDropdown.Item>Luigi Nono</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/composers/Ligeti">
                <NavDropdown.Item>György Ligeti</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/composers/Berio">
                <NavDropdown.Item>Luciano Berio</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/composers/Xenakis">
                <NavDropdown.Item>Iannis Xenakis</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="the New York School" id="basic-nav-dropdown">
              <LinkContainer to="/composers/Cage">
                <NavDropdown.Item>John Cage</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/composers/Feldman">
                <NavDropdown.Item>Morton Feldman</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;