import React, { useState } from 'react';
import axios from 'axios';

// create a new component that is used to edit an existing article
function ArticleEdit() {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/v1/articles/1`, {
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

export default ArticleEdit;