import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
const {serviceId, serviceUrl, serviceName, serviceNote} = props.service;


    return (
        <div>  
  <div class="col">
    <div class="card h-100">
      <img src={serviceUrl} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-primary fw-bold">{serviceName}</h5>
        <p class="card-text">{serviceNote}</p>
      </div>
      <Link style={{textDecoration: "none"}} to={`/serviceDeatils/${serviceId}`}>
      <button type="button" class="btn btn-primary">Service Fee</button></Link>
    </div>
  </div> 
</div>
    );
};

export default Service;