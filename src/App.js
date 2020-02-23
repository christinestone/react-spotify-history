import React, { Component } from 'react';
import './App.css';
import 'url-search-params-polyfill';
import Navigation from './components/Navigation/Navigation';
import Login from "./components/Login/Login";

class App extends Component {
  constructor() {
    super();
    const urlParams = new URLSearchParams(window.location.search);
    const isUserAuthorized = urlParams.has('authorized') ? true : false;

    this.state = {
      isUserAuthorized,
      loading: true,
      redirect: false
    };
  }

  componentDidMount() {
    fetch('https://christineislistening.herokuapp.com/checkToken')
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
  }

  render() {
    const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Login />;
      }
      return <Navigation />;
  }
}

export default App;
