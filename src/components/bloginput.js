import React, { useState } from 'react';
import axios from 'axios';

function BlogInput() {
    const [bodies, setData] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/bodies', { bodies });
            console.log(response.data);
        } catch (error) {
            console.error("Error sending data", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={bodies}
                onChange={(e) => setData(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default BlogInput;
