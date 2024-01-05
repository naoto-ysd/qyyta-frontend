import React, { useState } from 'react';
import axios from 'axios';

function ArticleSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchDatabase = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/articles/${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error during API request', error);
    }
  };

  return (
    <div>
      Get:
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={searchDatabase}>Search</button>

      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.title} - {item.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleSearch;
