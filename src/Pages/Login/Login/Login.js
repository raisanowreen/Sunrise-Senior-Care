import React from 'react';


const Login = () => {
 
    return (
        <div>
            <h4 className="text-center text-primary fw-bold mt-2">Please register</h4>
        <div className="d-flex justify-content-center">
           <form className="p-5">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Already registered?</label>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
  <button type="submit" className="btn btn-primary">Google Sign in</button>
</form>
<img className="p-5" src="https://i.ibb.co/b6m1XZ6/danie-franco-Ce-Zyp-KDce-Qc-unsplash.jpg" alt="" height="550px" />
        </div>
        </div>
    );
};

export default Login;