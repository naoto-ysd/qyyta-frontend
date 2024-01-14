import logo from './logo.svg';
import './App.css';
import ArticlePost from './components/ArticlePost';
import ArticleSearch from './components/ArticleSearch';
import ArticleEdit from './components/ArticleEdit';
import UserSignUp from './components/UserSignUp';
import UserLogin from './components/UserLogin';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArticlePost />
        <ArticleSearch />
        <UserSignUp />
        <ArticleEdit />
        <UserLogin />
      </header>
    </div>
  );
}

export default App;
