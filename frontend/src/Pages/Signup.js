import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'

const SignIn = () => {

  const [credentials,setcredentials]=useState({name:"",userId:"",password:"",email:""})
  let navigate=useNavigate()
  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic here
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch("http://localhost:3500/api/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credentials.name, userId:credentials.userId ,password:credentials.password, email:credentials.email})
    }) 
    const json = await response.json()
    console.log(json);

    if(!json.success){
     alert("Enter valid credentials")
    }else{
      alert("Account created")
      navigate('/home')
    }
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="text">Name:</label>
                  <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
                </div>
              <div className="form-group">
                  <label htmlFor="text">UserId:</label>
                  <input type="text" className="form-control" name="userId" value={credentials.userId} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                  />
                </div>
                <button type="submit" className=" m-3 btn btn-primary btn-block">
                  Sign In
                </button>
                <Link to='/login' className='m-3 btn btn-danger'>Already a User</Link>
              </form>
              <hr />
              <div className="text-center">
                <p>Or sign in with:</p>
                <button
                  className="btn btn-danger mr-2"
                  onClick={handleGoogleSignIn}
                >
                  <i className="fab fa-google mr-2"></i> Sign in with Google
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleFacebookSignIn}
                >
                  <i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
