import logo from './logo.svg';
import './App.css';
import BlogBody from './components/blogbody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BlogBody />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
