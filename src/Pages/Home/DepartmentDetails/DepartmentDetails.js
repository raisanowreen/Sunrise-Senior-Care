import React from 'react';

const DepartmentDetails = (props) => {
    console.log(props);
const {serviceUrl, serviceName} = props.service;
    return (
        <div className="mb-2">
            <h1>{serviceName}</h1>
            <img src={serviceUrl} class="card-img" alt="..."/>
           <div className="d-flex justify-content-center m-2">
           <button type="button" class="btn btn-primary">Department Information</button>
           </div>
        </div>
    );
};

export default DepartmentDetails;