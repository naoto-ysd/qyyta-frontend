import React, { useState } from 'react';
import axios from 'axios';

function UserSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/v1/auth`, {
        email,
        password,
        password_confirmation: password,
        confirm_success_url: 'http://localhost:3000/'
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default UserSignUp;
