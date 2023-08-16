import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">PRAGATI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link active">Home</Nav.Link>
            <Nav.Link as={Link} to="/admin" className="nav-link">Admin</Nav.Link>
            <Nav.Link as={Link} to="/books" className="nav-link">Books</Nav.Link>
            {/* <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="nav navbar-nav navbar-right">
            <Nav.Link as={Link} to="/signup" className="nav-link btn btn-primary">
              <span className="glyphicon glyphicon-user"></span> Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link btn btn-primary">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
