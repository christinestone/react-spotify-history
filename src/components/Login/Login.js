import React, { Component } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          isSignedIn: []
        }
    }

    render() {
        return (
            <span className="login">
                <h1 className="login__title">Login</h1>
                <Button className="btn btn-primary btn-login" variant="contained">
                  <a href="https://christineislistening.herokuapp.com/login">
                    Connect to Spotify
                </a>
                </Button>

                <div className="background_image" />
           </span>
        )
    }
}

export default Login;
