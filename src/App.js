import logo from './logo.svg';
import './App.css';
import BlogPost from './components/blogpost';
import BlogSearch from './components/blogsearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BlogPost />
        <BlogSearch />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
