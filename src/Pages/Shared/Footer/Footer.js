import React from 'react';
import footerLogo from '../../../images/logos/logo_footer.png';


// Footer starts with search form and hospital information
const Footer = () => {
    return (
        <div className="card bg-dark text-white w-100">
  <img src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&w=480&dpr=1" className="card-img" alt="..." height="350px"/>
  <div className="card-img-overlay mt-4">
   <div className="d-flex flex-sm-wrap flex-md-nowrap flex-wrap justify-content-around">
   
   <div className="d-flex text-secondary">
       <div className="me-5">
           <h6>About Sunrise Care</h6>
           <h6>Read our blog</h6>
           <h6>Sign up to know more</h6>
           <h6>Add your address</h6>
       </div>
       <div>
       <h6>Get help</h6>
       <h6>Read FAQs</h6>
       <h6>View all departments</h6>
       <h6>Hospitals near me</h6>
       </div>
   </div>
   <div>
       <img src={footerLogo} alt="" height="50px"/>
       <h1 className="text-white"><span className="text-warning">Sunrise</span> Senior Care</h1>
       <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
   </div>
   </div>
  
  </div>
  <div className="d-flex flex-sm-wrap flex-md-nowrap flex-wrap justify-content-around mt-5 w-100">
      <p><small className="text-secondary">Copyright <i className="far fa-copyright"></i> sunrise senior care</small></p>
<div className="d-flex text-secondary ms-5">
    <h6 className="me-5">Privacy Policy</h6>
    <h6 className="me-5">Terms of use</h6>
</div>
  </div>
</div>
    );
};

export default Footer;