import React from 'react';


// Departments details starts
const DepartmentDetails = (props) => {
    console.log(props);
const {serviceUrl, serviceName} = props.service;
    return (
        <div className="mb-2">
            <h1>{serviceName}</h1>
            <img src={serviceUrl} className="card-img" alt="..."/>
           <div className="d-flex justify-content-center m-2">
           <button type="button" className="btn btn-primary">Department Information</button>
           </div>
        </div>
    );
};

export default DepartmentDetails;