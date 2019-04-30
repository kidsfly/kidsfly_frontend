import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
        <UserList />
      </div>
    );
  }
}

export default App;
