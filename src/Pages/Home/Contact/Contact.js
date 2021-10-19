import React from 'react';

const Contact = () => {
    return (
        <div>
        <h3 className="text-primary text-center mt-5" id="services">Contact Us</h3>  

<div className="d-flex flex-sm-wrap flex-md-nowrap justify-content-center m-5">
<div className="ms-5 pt-5 pe-5">
    <div className="mb-5">
        <h1 className="text-warning"><i className="fas fa-home"></i>Hospital Address</h1>
        <p>71 Pilgrim Avenue
Chevy Chase, MD 20815</p>
    </div>
    <div className="mb-5">
        <h1 className="text-warning"><i className="fas fa-envelope-open-text"></i>Email Adress</h1>
        <p>youremail@info.com</p>
    </div>
    <div className="mb-5">
        <h1 className="text-warning"><i className="fas fa-phone-alt"></i>Contact Number</h1>
        <p>+18 (077) 555 22 33</p>
    </div>
</div>
<img className="mt-5" src="https://www.varanasihospital.com/wp-content/uploads/2015/10/Contact-Us_Banner1-1280x800.jpg" alt="" height="300px"/>
</div>
   </div>
    );
};

export default Contact;