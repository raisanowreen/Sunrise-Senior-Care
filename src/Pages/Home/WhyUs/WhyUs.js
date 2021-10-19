import React from 'react';

const WhyUs = () => {
    return (
       <div>
            <h3 className="text-primary text-center mt-5" id="services">Why Choose Us</h3>  

<div className="d-flex justify-content-center m-5">
    <div className="ms-5 pt-5 mt-5 pe-5">
        <div className="mb-5">
            <h1 className="text-primary"><i class="fas fa-stethoscope me-2"></i>Meeting your emotional needs</h1>
            <p>An elderly person needs to feel safe, remain close to other people and believe that life continues.</p>
        </div>
        <div className="mb-5">
            <h1 className="text-primary"><i class="fas fa-user-md me-2"></i>Meeting Your Physical Needs</h1>
            <p>We offer skilled nursing services at all of our locations with professionally trained nursing staff.</p>
        </div>
        <div className="mb-5">
            <h1 className="text-primary"><i class="fas fa-hand-holding-water me-2"></i>Enjoy Independent Living</h1>
            <p>Gives seniors the confidence to remain independent in a professionally managed environment.</p>
        </div>
    </div>
    <img src="https://i.ibb.co/0Qcq3C4/john-moeses-bauan-8-YVa-Elj-M-9-I-unsplash.jpg" alt="" height="600px"/>
</div>
       </div>
    );
};

export default WhyUs;