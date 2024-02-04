import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignUp';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {isLoggedIn ? <Home /> : <UserLogin onLoginSuccess={() => setIsLoggedIn(true)} />}
          <UserSignUp />
        </header>
      </div>
      <div>
        <Router>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Router>
  );
}

export default App;
