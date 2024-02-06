import React, { useState, useEffect } from 'react';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignUp';
import Home from './components/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      // 必要に応じて、トークンの検証やユーザー情報の取得を行う
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <Home />
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
