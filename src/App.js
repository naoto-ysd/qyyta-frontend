import React, { useState, useEffect } from 'react';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignUp';
import Home from './components/Home';
import Button from './components/Button';
import Form from './components/Form';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <>
            <Home />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <UserLogin onLoginSuccess={() => setIsLoggedIn(true)} />
            <UserSignUp />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
