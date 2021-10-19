import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WhyUs from '../WhyUs/WhyUs';


// Home page starts
const Home = () => {
    return (
     <div className="home">
            <Banner></Banner>
            <Testimonials></Testimonials>
        <Services></Services>
        <WhyUs></WhyUs>
        
     </div>
    );
};

export default Home;