import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props);
const {serviceUrl, serviceName, serviceNote, serviceId} = props.service;

return (
        <div>  
  <div className="col">
    <div className="h-100">
      <img src={serviceUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-primary fw-bold">{serviceName}</h5>
        <p className="card-text">{serviceNote}</p>
      </div>
      <div className="d-flex justify-content-center mb-3">
      <Link to={`/singleservice/${serviceId}`}><button type="button" className="btn btn-primary">Service Fee</button></Link>
      </div>
    </div>
  </div> 
</div>
    );
};

export default Service;