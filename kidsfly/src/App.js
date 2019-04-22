import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOnBoarding from './Components/UserOnboarding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOnBoarding />
      </div>
    );
  }
}

export default App;
