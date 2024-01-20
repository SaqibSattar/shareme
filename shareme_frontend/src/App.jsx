import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Login } from './components';
import Home from './container/Home';
import { fetchUser } from './utils/fetchUser';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = fetchUser()

    if (!User) navigate('/login');
  }, []);

  return (
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN}`}>
    
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;