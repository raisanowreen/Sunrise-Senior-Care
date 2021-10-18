import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../../images/logos/logo_header.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <div className="bg-primary text-white d-flex justify-content-end pt-3">
               <h6 className="me-3"><i className="fas fa-phone-volume"></i> 9845037</h6>
               <h6 className="me-3"><i className="far fa-clock me-1"></i>Sun-Sat 8am to 10 pm</h6>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand me-5" to="/home">
      <img src={headerLogo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" as={HashLink} to="/home#home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" as={HashLink} to="/home#services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" as={HashLink} to="/departments#departments">Departments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" as={HashLink} to="/appointment#appointment">Appointment</Link>
        </li>
      </ul>
      
    </div>
    <div className="d-flex">
    <div className="d-flex">
      <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
      <Link className="nav-link active" aria-current="page" to="/login">Logout</Link>
      <h4 className="me-2 mt-2">Raisa</h4>
      <img src={headerLogo} alt="" width="30" height="24" className="d-inline-block align-text-top mt-2"/>
      </div>
  </div>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
</nav>
        </div>
    );
};

export default Header;