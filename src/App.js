import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <a href="MY_REPO_LINK">my-react-google-login</a>
    </div>
  );
}

export default App;
