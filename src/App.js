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
    const { redirect } = this.state;
    return (
        <div className="tl">
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
