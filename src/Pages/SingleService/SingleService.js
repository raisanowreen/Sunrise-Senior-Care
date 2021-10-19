import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './SingleService.css';

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
            <div class="card text-center w-50 mx-auto">
        <div class="card-header mt-3">
          Welcome
        </div>
        <img className="p-5" src={service.serviceUrl} alt=""/>
        <div class="card-body">
          <h5 class="card-title text-primary fw-bold">{service.serviceDepartment}</h5>
          <p class="card-text">{service.serviceDetails}</p>
          <p class="card-text">Charge: $ {service.serviceFee}</p>
          <Link to="/appointment"><button type="button" className="btn btn-primary">Get Appointment</button></Link>
        </div>
        <div class="card-footer text-muted">
          Available Now
        </div>
      </div>
       </div>
    );
};

export default SingleService;