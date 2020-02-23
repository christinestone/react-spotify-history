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
                 <a href="https://christineislistening.herokuapp.com/login">Connect your Spotify account</a>
               </div>
        )
    }
}

export default Login;
