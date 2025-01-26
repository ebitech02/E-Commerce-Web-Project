import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from './Product';  // Assuming your products array is exported from a file
import { ShopContext } from "./context/ShopContext";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Cart';
import { CartProvider, useCart } from "react-use-cart";



const showToast = () => {
  toast.success("Item added to cart successfully!", {
    position: "top-right", // You can change position like top-center, bottom-left, etc.
    autoClose: 3000, // Time (in ms) before toast auto-closes
    hideProgressBar: false, // Show or hide the progress bar
    closeOnClick: true, // Allow closing the toast by clicking on it
    pauseOnHover: true, // Pause the toast when hovered
    draggable: true, // Allow dragging the toast
  });
};

const ProductDetail = () => {
  // Get the product id from the URL parameters
  const { id } = useParams();
  const { addToCart} = useContext(ShopContext);

  // Find the product that matches the id
  const product = products.find((product) => product.id === parseInt(id));
  
  if (!product) {
    return <div>Product not found</div>; // In case the product doesn't exist
  }

  return (
    <div className="max-w-4xl h-screen mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className='bg-slate-600 h-96 rounded-lg'>
           <img
            src={product.image}
            alt={product.productDescription}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          /> 
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800">{product.productTitle}</h1> 
          <h2 className="text-base text-gray-800">{product.productDescription}</h2>
         
          <div className="mt-6">
            <span className="text-2xl font-bold text-gray-900">${product.productPrice}</span>
          </div>
          <button
            className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            onClick={()=>addToCart(id)} 
          >
            Add to Cart 
          </button>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default ProductDetail;
