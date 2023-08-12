import React from "react";

const SignIn = () => {
  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic here
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
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
