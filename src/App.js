import logo from './logo.svg';
import './App.css';
import ArticlePost from './components/ArticlePost';
import ArticleSearch from './components/ArticleSearch';
import UserSignUp from './components/UserSignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArticlePost />
        <ArticleSearch />
        <UserSignUp />
      </header>
    </div>
  );
}

export default App;
