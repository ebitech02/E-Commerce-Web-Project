import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import './index.css';
import Navbar from './Navbar';
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import ShopContextProvider from './context/ShopContext';
import { ToastContainer } from 'react-toastify';

import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import LoginSignup from './Loginsignup';
import ProtectedRoute from './ProtectedRoute';


// Auth0 Configuration
const domain = "dev-5ycv5undcjaof38v.us.auth0.com"; // Replace with your Auth0 domain
const clientId = "w4K5IGlQPb8hf77YMKFzBiTKDNPldNhS"; // Replace with your Auth0 client ID

function App() {
  return (
    <ShopContextProvider>
      <ToastContainer />
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <BrowserRouter>
          <div className="min-h-screen">
            <Navbar />
            
            {/* Wrap the Routes in the Elements provider */}
         
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<ProtectedRoute>
<Cart />
</ProtectedRoute>

} />
      
               
     <Route path="/login" element={<LoginSignup />} /> 
              </Routes>
          

            <Footer />
          </div>
        </BrowserRouter>
      </Auth0Provider>
    </ShopContextProvider>
  );
}

export default App;
