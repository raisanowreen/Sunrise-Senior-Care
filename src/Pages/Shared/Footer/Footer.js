import React from 'react';
import footerLogo from '../../../images/logos/logo_footer.png';

const Footer = () => {
    return (
        <div class="card bg-dark text-white">
  <img src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&w=480&dpr=1" class="card-img" alt="..." height="350px"/>
  <div class="card-img-overlay mt-4">
   <div className="d-flex justify-content-around">
   <div>
       <img src={footerLogo} alt="" height="50px"/>
       <h1 className="text-white"><span className="text-warning">Sunrise</span> Senior Care</h1>
   </div>
   <div className="d-flex mb-5 text-secondary">
       <div className="me-5">
           <h6>About online food</h6>
           <h6>Read our blog</h6>
           <h6>Sign up to deliver</h6>
           <h6>Add your restaurant</h6>
       </div>
       <div>
       <h6>Get help</h6>
       <h6>Read FAQs</h6>
       <h6>View all cities</h6>
       <h6>Restaurants near me</h6>
       </div>
   </div>
   </div>
   <div className="d-flex justify-content-around mt-5">
      <p><small className="text-secondary">Copyright <i class="far fa-copyright"></i> 2000 online food</small></p>
<div className="d-flex text-secondary ms-5">
    <h6 className="me-5">Privacy Policy</h6>
    <h6 className="me-5">Terms of use</h6>
    <h6>Pricing</h6>
</div>
  </div>
  </div>
</div>
    );
};

export default Footer;