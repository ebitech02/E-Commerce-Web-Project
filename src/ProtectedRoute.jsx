import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation(); // Get the current location

  if (isLoading) {
    return <div>Loading...</div>; // Show loading while the authentication state is being checked
  }

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page and store the current location
    return (
      <Navigate
        to="/login"
        state={{ from: location }} // Save the route user wanted to go to
        replace
      />
    );
  }

  return <>{children}</>; // If authenticated, render the children (protected page)
};

export default ProtectedRoute;
