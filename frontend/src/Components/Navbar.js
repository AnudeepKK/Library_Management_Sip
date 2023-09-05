import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   // Check if the user is logged in when the component mounts
  //   const authToken = localStorage.getItem("authToken");
  //   setIsLoggedIn(!authToken); // Convert to boolean

  //   // You can also do any additional authentication checks here if needed
  // }, []);

  const handleLogout = () => {
    // const shouldLogout = alert('You have logged out');

    // if (shouldLogout) {
      localStorage.removeItem("authToken");
      // setIsLoggedIn(false); // Update the state to reflect logout
      navigate("/login");
    // }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">PRAGATI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>

            <NavLink to="/books" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faBook} /> Books
            </NavLink>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/libpolicy">Library policies</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {(!localStorage.getItem("authToken")) ? 
            <Nav className="nav navbar-nav navbar-right">
              <Nav.Link as={Link} to="/signup" className="nav-link btn">
                <FontAwesomeIcon icon={faUser} /> Signup
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link btn">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Nav.Link>
            </Nav>
           : 
            <Nav>
              <NavLink to="/admin" className="nav-link" activeClassName="active">
                <FontAwesomeIcon icon={faUser} /> Admin
              </NavLink>
              <Nav.Link as={Link} to="/login" className="nav-link btn" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="text-danger" /> Logout
              </Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
