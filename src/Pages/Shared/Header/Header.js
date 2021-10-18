import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../../images/logos/logo_header.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <div className="bg-primary text-white p-2">
                <h6><i class="fas fa-phone-volume ms-5 me-2"></i>Emergency Contact: 9845037</h6>

            </div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link class="navbar-brand me-5" to="/home">
      <img src={headerLogo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
    </Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" as={HashLink} to="/home#home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" as={HashLink} to="/home#services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" as={HashLink} to="/departments#departments">Departments</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" as={HashLink} to="/appointment#appointment">Appointment</Link>
        </li>
      </ul>
      
    </div>
    <div className="d-flex">
    <div class="d-flex">
      <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
      <Link class="nav-link active" aria-current="page" to="/login">Logout</Link>
      <h4 className="me-2 mt-2">Raisa</h4>
      <img src={headerLogo} alt="" width="30" height="24" class="d-inline-block align-text-top mt-2"/>
      </div>
  </div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
</nav>
        </div>
    );
};

export default Header;