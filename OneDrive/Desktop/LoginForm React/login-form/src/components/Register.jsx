import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill all fields.');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registration successful!');
    onRegister();
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registration Form</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
