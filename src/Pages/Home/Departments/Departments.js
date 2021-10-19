// import React, { useEffect, useState } from 'react';
// import DepartmentDetails from '../DepartmentDetails/DepartmentDetails';

// // Dynamic department information starts withing private route
// const Departments = () => {
//     const [services, setServices] = useState([]);


//     useEffect(() =>{
//         fetch('/facilities.json')
//         .then(res =>res.json())
//         .then(data => setServices(data));
//     },[])
//     return (
//         <div className="w-75 mx-auto">
//               <h3 className="text-primary fw-bold text-center mt-5 mb-4">Our Departments</h3>  
//             {
//                  <div className="card bg-dark text-white mb-3">
//                  {
//                      services.map(service => <DepartmentDetails
//                      key= {services.serviceId}
//                      service={service}
//                      ></DepartmentDetails>)
//                  }
//                  </div>
//             }
//         </div>
//     );
// };

// export default Departments;