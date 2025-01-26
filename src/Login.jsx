import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  // After login, redirect to the page user originally tried to access
  useEffect(() => {
    if (isAuthenticated) {
      const returnUrl = location.state?.from?.pathname || '/'; // Fallback to home page if no `from`
      navigate(returnUrl);
    }
  }, [isAuthenticated, location.state, navigate]);

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
