import React from 'react';
import useAuth from '../../../hooks/useAuth';



// Login and register implementation by using firebase and google signin method used
const Login = () => {
    const {signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error, toggleLogin, isLogin, handleNameChange} = useAuth();

    return (
        <div>
                        <h3 className="text-primary text-center mt-2 mb-2" id="services">{isLogin ? 'Login': 'Register'} Please</h3>  
{/* Toggle User login and registration  */}
            <form onSubmit={handleRegistration} className="w-50 mx-auto">
 {! isLogin && <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Your name</label>
    <input onBlur={handleNameChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="mb-3 form-check">
    <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Already registered?</label>
  </div>
  <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
  <h1>{error}</h1>
</form>
{/* google sign in method */}
<div className="d-flex justify-content-center mb-5">
<button onClick={signInUsingGoogle} type="submit" className="btn btn-primary">Google Sign in</button>

</div>
        </div>
    );
};

export default Login;