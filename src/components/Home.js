import ArticlePost from './ArticlePost';
import ArticleSearch from './ArticleSearch';
import ArticleEdit from './ArticleEdit';

function Home() {
  return (
    <div>
      <ArticlePost />
      <ArticleSearch />
      <ArticleEdit />
    </div>
  );
}

export default Home;