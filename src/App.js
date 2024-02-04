import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignUp';
import Home from './components/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? <Home /> : <UserLogin onLoginSuccess={() => setIsLoggedIn(true)} />}
        <UserSignUp />
      </header>
    </div>
  );
}

export default App;
