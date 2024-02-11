import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignUp';
import Home from './components/Home';
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
          <Routes>
            <Route path="/" element={<UserLogin onLoginSuccess={() => setIsLoggedIn(true)} />} />
            <Route path="/signup" element={<UserSignUp />} />
            <Link to="/signup">Sign Up</Link>
          </Routes>
        )}
      </header>
    </div>
  );
}

export default App;
