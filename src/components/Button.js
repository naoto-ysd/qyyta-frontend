import React, { useState } from 'react';
import axios from 'axios';

function UserLogin({ onLoginSuccess }) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/v1/auth/sign_in`, {
        email,
        password,
        confirm_success_url: 'http://localhost:3000/'
      });
      if (response.status === 200) {
        console.log(response);
        // トークンをローカルストレージに保存
        localStorage.setItem('authToken', response.headers.token);
        onLoginSuccess();
      }
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
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default UserLogin;