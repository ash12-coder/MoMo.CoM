import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
const Navbar = () =>{
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
  <NavLink className="navbar-brand text-secondary"  to="/home">MOmo.CoM</NavLink>
  <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink to="/home" className="nav-item nav-link text-dark" >HOME</NavLink>
      <NavLink to="/veg" className="nav-item nav-link text-success" >VEG</NavLink>
      <NavLink to="/nonveg" className="nav-item nav-link text-danger" >NONVEG</NavLink>
      <NavLink to="/sweet" className="nav-item nav-link text-light ">SWEET</NavLink>
      <NavLink to="/special" className="nav-item nav-link text-primary ">Specialmomo</NavLink>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar;