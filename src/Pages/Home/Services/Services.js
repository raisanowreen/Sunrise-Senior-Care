import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


// Dynamic services starts from fake data
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('/facilities.json')
        .then(res =>res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div id="services">
              <h3 className="text-primary text-center mt-5">Our Services</h3>  
            {
                 <div className="row row-cols-1 row-cols-md-3 g-4 m-3 bg-primary">
                 {
                     services.map(service => <Service
                     key= {services.serviceId}
                     service={service}
                     ></Service>)
                 }
                 </div>
            }
        </div>
    );
};

export default Services;