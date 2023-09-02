import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Import NavLink
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("authToken");
    // navigate("/login");
    const shouldLogout = window.confirm('Are you sure you want to log out?');

    if (shouldLogout) {
      localStorage.removeItem("authToken");
      navigate("/login");
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">PRAGATI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Use NavLink for Home */}
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>

            {/* Use NavLink for Books */}
            <NavLink to="/books" className="nav-link" activeClassName="active">Books</NavLink>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {(!localStorage.getItem("authToken")) ?
            <Nav className="nav navbar-nav navbar-right">
              <Nav.Link as={Link} to="/signup" className="nav-link btn">
                <span className="glyphicon glyphicon-user"></span> Signup
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link btn">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </Nav.Link>
            </Nav>
            :
            // <Nav>
            //   {/* <Nav.Link as={Link} to="/admin" className="nav-link"  activeClassName="active">Admin</Nav.Link> */}
            //   <NavLink to="/admin" className="nav-link" activeClassName="active">Admin</NavLink>
            //   <Nav.Link as={Link} to="/login" className="nav-link btn btn-primary" onClick={handleLogout}>
            //     <span className="glyphicon glyphicon-log-in text-danger"></span> Logout
            //   </Nav.Link>
            // </Nav>
            <Nav>
            {/* <Nav.Link as={Link} to="/admin" className="nav-link"  activeClassName="active">Admin</Nav.Link> */}
            <NavLink to="/admin" className="nav-link" activeClassName="active">Admin</NavLink>
            <Nav.Link as={Link} to="/login" className="nav-link btn" onClick={handleLogout}>
              <span className="glyphicon glyphicon-log-in text-danger"></span> Logout
            </Nav.Link>
          </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
