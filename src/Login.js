import React, { Component } from 'react';
import './style/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import config from './config.js';

/**
* Locations component is responsible for populating the Location of the company
**/


class Login2 extends Component {

render() {

  const responseGoogle = (response) => {
      if(response.profileObj){
        window.location.href = "/employee";
      }
  }

  return (
           <div class="Google-Signin">
              <GoogleLogin
                clientId={config.GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}/
              >
           </div>
        );
  }
}

export default Login2;
