import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          isSignedIn: []
        }
    }

    render() {
        return (
            <div className="tc">
                 <h2>Login</h2>
                 <a href="http://localhost:5000/login">Connect your Spotify account</a>
               </div>
        )
    }
}

export default Login;
