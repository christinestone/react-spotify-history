import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login";
import AppContent  from './AppContent';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      redirect: false
    };
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    token ? this.setState({ loading: false, redirect: false }) : this.setToken();
  }

  setToken() {
    const url = window.location.href;
    const accessToken = url.split('#access_token=')[1];
    if (accessToken) {
      window.sessionStorage.setItem('token', accessToken);
      window.location.href = 'https://christineislistening.herokuapp.com';
    }
    this.setState({ loading: false, redirect: true });
  }

  render() {
    const { redirect, loading } = this.state;
    if (loading) return null;
    return (
        <div className="tc">
          { redirect
              ?
              <Login/>
              :
              <AppContent/>
          }
        </div>
    )
  }
}

export default App;
