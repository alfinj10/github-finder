import React from 'react';
import './App.css';
import Navbar from  './components/layouts/Navbar.js';
import Users from './components/users/Users.js';
import axios from 'axios';
import Search from './components/users/Search.js';

class App extends React.Component {

  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    
  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   console.log(res.data);

  //   this.setState({ users: res.data, loading: false});
    
  // }

  searchUsers = async text => {

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false});
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }

}

export default App;
