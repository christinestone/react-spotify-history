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
                <Button className="btn btn-primary" variant="contained">
                  <a href="https://christineislistening.herokuapp.com/login" className="pa3 mt0">
                    Connect to Spotify
                  </a>
                </Button>

                <div className="background_image" />
           </span>
        )
    }
}

export default Login;
