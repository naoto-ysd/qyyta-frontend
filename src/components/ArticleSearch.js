import React, { useState } from 'react';
import axios from 'axios';

function ArticleSearch() {
  const [query, setQuery] = useState('');
  const [result, setResults] = useState([]);

  const searchArticle = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/v1/articles/${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error during API request', error);
    }
  };

  return (
    <div>
      Get::
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={searchArticle}>Search</button>

      <ul>
        {result.title} {result.body}
      </ul>
    </div>
  );
}

export default ArticleSearch;
