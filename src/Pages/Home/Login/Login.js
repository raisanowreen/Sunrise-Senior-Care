import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';



// Login and register implementation by using firebase and google signin method used
const Login = () => {
    const {signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error, toggleLogin, isLogin, handleNameChange} = useAuth();
const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/home'
console.log('came from', location.state?.from);

const handleGoogleLogIn = () =>{
  signInUsingGoogle()
    .then(result =>{
      history.push(redirect_uri)
      // setUser(result.user);
  })
  
}
    return (
        <div className="me-5">
                        <div>
                        <h3 className="text-primary text-center mt-2 mb-2" id="services">{isLogin ? 'Login': 'Register'} Please</h3>  
{/* Toggle User login and registration  */}
            <div className="d-flex flex-sm-wrap flex-md-nowrap flex-xl-wrap flex-wrap justify-content-around">
            <form onSubmit={handleRegistration} className="w-50 mx-auto bg-light mt-3">
 {! isLogin && <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-success fw-bold">Your name</label>
    <input onBlur={handleNameChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-success fw-bold">Email address</label>
    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-success fw-bold">Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="mb-3 form-check">
    <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Already registered?</label>
  </div>
  <h5 className="text-danger">{error}</h5>
  <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
</form>

<div>
  <img className="mt-4" src="https://i.ibb.co/tLWKTCF/Password-login-verification-code-push-message-or-sms-for-2fa-authentication-notice-with-shield-icon.jpg" alt="" height="250px" />
</div>
            </div>
                        </div>



{/* google sign in method */}
<div className="d-flex justify-content-center mt-2 mb-5">
<button onClick={handleGoogleLogIn} type="submit" className="btn btn-primary">Google Sign in</button>

</div>
        </div>
    );
};

export default Login;