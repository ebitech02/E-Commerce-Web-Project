import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { loginWithRedirect, signUpWithRedirect } = useAuth0();
  const navigate = useNavigate();

  // Handle login or sign-up based on the current state
  const handleAuthAction = () => {
    if (isSignUp) {
      signUpWithRedirect({
        redirect_uri: window.location.origin,
      });
    } else {
      loginWithRedirect({
        redirect_uri: window.location.origin,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          {isSignUp ? 'Sign Up' : 'Log In'} to Your Account
        </h2>

        {/* Auth0 Button */}
        <div className="flex justify-center">
          <button
            onClick={handleAuthAction}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            {isSignUp ? 'Sign Up with Auth0' : 'Log In with Auth0'}
          </button>
        </div>

        {/* Toggle between Sign Up and Log In */}
        <div className="text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 underline hover:text-blue-700"
          >
            {isSignUp
              ? 'Already have an account? Log In'
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
