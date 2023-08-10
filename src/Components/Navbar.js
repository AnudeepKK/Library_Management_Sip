import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md justify-content-space-between bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin" className="nav-link ">Admin</Link>
        </li>
        <li className="nav-item">
          <Link to="/books" className="nav-link">Books</Link>
        </li>
        <li>
          <Link className='nav-item btn btn-primary' to='/login'>Login</Link>
        </li>
        <li>
          <Link className='nav-item btn btn-primary' to='/signup'>Signup</Link>
        </li>
      </ul>
      
      
    </nav>
  );
};

export default Navbar;
