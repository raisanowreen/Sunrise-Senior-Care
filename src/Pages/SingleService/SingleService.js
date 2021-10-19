import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



// Single service showcasing by using dynamic route and private route
const SingleService = () => {
    const {id} = useParams();
const [service, setService] = useState({});

useEffect(()=>{
    fetch('/facilities.json')
    .then(res =>res.json())
    .then( data =>{
        const p = data.find(s => s.serviceId == id)
        setService(p)
    }
        
        )
},[id]);

    return (
       <div className="bg-primary">
            <div className="card text-center w-50 mx-auto">
        <div className="card-header mt-3">
          Welcome
        </div>
        <img className="p-5" src={service.serviceUrl} alt=""/>
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">{service.serviceDepartment}</h5>
          <p className="card-text">{service.serviceDetails}</p>
          <p className="card-text">Charge: $ {service.serviceFee}</p>
          <Link to="/appointment"><button type="button" className="btn btn-primary">Get Appointment</button></Link>
        </div>
        <div className="card-footer text-muted">
          Available Now
        </div>
      </div>
       </div>
    );
};

export default SingleService;