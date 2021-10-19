import React from 'react';



// Appointment confirmation page starts with private route
const ConfirmAppointment = () => {
    return (
        <div className="m-5"> 
           <div className="d-flex justify-content-center">
           <img src="https://image.freepik.com/free-vector/set-doctor-cartoon-happy-characters_36082-602.jpg" alt="" height="500px"/>
           </div>
           <h3 className="text-primary fw-bold text-center mt-1" id="services">Appoinment Confirmed! You will get SMS soon.</h3> 
        </div>
    );
};

export default ConfirmAppointment;