import React, { Component } from 'react';
import './App.css';
import 'url-search-params-polyfill';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  constructor() {
    super();
    const urlParams = new URLSearchParams(window.location.search);
    const isUserAuthorized = urlParams.has('authorized') ? true : false;

    this.state = {
      isUserAuthorized,
      musicHistory: []
    };
  }

  render() {
    const { isUserAuthorized } = this.state;
    const connectSpotify = isUserAuthorized ? (
      ''
    ) : (
      <div>
      <h1 className="h1 purple">Test</h1>
      <a href="http://localhost:5000/login">Connect your Spotify account</a>
      </div>
    );

    return (
      <div className="App">
        <header className="header">
          {connectSpotify}
        </header>
          {isUserAuthorized ? <Navigation /> : null}
      </div>
    );
  }
}

export default App;
