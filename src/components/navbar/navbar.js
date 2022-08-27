import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">AGDb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">about the AGDb</Nav.Link>
            <NavDropdown title="the Darmstadt School" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Pierre Boulez</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Karlheinz Stockhausen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Luigi Nono</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">György Ligeti</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Luciano Berio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Iannis Xenakis</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="the New York School" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">John Cage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Morton Feldman</NavDropdown.Item>
              <NavDropdown.Item href="#action/Wolff">Christian Wolff</NavDropdown.Item>
              <NavDropdown.Item href="#action/Brown">Earle Brown</NavDropdown.Item>
              <NavDropdown.Item href="#action/Tudor">David Tudor</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


// import React from 'react';

// export default function NavBar() {
//   return (
//     <div>This here is gonna be a navbar!</div>
//   )
// }