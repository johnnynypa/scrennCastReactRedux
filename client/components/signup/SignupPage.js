import React from 'react';
import SignupForm from '../signup/SignupForm'

class SignupPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign up page</h1>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignupForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
