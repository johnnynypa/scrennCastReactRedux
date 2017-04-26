import React from 'react';
import SignupForm from '../signup/SignupForm'
import {connect} from 'react-redux'
import {userSignupRequest} from '../../actions/signupActions';

class SignupPage extends React.Component {
  render() {
    const {userSignupRequest} = this.props;
    return (
      <div>
        <h1>Sign up page</h1>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignupForm userSignupRequest={userSignupRequest} />
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.prototype = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest} )(SignupPage);
//export default connect((state) =>{ return  }, {userSignupRequest} )(SignupPage);
