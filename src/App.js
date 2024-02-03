import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
