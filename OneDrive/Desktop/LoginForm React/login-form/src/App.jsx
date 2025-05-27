import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    setIsRegistered(true); // Go back to login page
  };

  return (
    <div className="container">
      {!loggedInUser ? (
        !isRegistered ? (
          <Register onRegister={() => setIsRegistered(true)} />
        ) : (
          <Login onLogin={(user) => setLoggedInUser(user)} />
        )
      ) : (
        <>
          <h2>Welcome, {loggedInUser}!</h2>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default App;
