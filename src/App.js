import React from 'react';
import './App.css';
import Navbar from  './components/layouts/Navbar.js';
import Users from './components/users/Users.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }

}

export default App;
