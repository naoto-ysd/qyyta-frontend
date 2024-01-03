import React, { useState } from 'react';
import axios from 'axios';

function BlogBody() {
  const [body, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/blog_posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body }),
      });
      if (response.ok) {
        alert('User saved successfully!');
      } else {
        alert('Failed to save user.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Body:
        <input type="text" value={body} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BlogBody;
