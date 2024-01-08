import React, { useState } from 'react';
import axios from 'axios';

function ArticlePost() {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/articles', {
        title: 'hoge',
        body: inputValue
      });

      setResponseData(response.data);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {responseData && <div>{JSON.stringify(responseData)}</div>}
    </div>
  );
}

export default ArticlePost;
