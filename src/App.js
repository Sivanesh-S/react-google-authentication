import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';

function App() {
  return (
    <div className="App">
      <h2>The Components way</h2>
      <Login />
      <Logout />
      <h2>The Hooks way</h2>
      <LoginHooks />
      <LogoutHooks />
      <a href="https://github.com/Sivanesh-S/react-google-authentication">
        Github Repo
      </a>
    </div>
  );
}

export default App;
