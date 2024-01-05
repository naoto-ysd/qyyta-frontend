import logo from './logo.svg';
import './App.css';
import ArticlePost from './components/article-post';
import ArticleSearch from './components/article-search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArticlePost />
        <ArticleSearch />
      </header>
    </div>
  );
}

export default App;
