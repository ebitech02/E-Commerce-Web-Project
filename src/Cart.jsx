import { useContext, useState, useEffect } from "react";
import products from "./Product";
import { ShopContext } from "./context/ShopContext";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // Importing Auth0 to check authentication

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    removeFromCart2,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useAuth0(); // Authentication state
  const totalAmount = getTotalCartAmount(); // Ensure the totalAmount is a number

  // Check if cart is empty by verifying if there are any items with quantity > 0
  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);

  // Handle the navigation to the checkout page when the user clicks on 'Proceed to Buy'
  const handleProceedToBuy = () => {
    if (isAuthenticated) {
      navigate("/checkoutform", { state: { totalAmount } }); // Pass the total amount to CheckoutForm
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
  };

  // Show loading state until authentication is settled
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If user is not authenticated, show a message and offer login
  if (!isAuthenticated) {
    return (
      <div className="p-4 flex items-center justify-center flex-col">
        <p>Please log in to view your cart.</p>
        <div
          className="p-2 flex bg-black text-white justify-center items-center mt-8 w-1/2 rounded-3xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login to continue
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-black">
      <h5 className="text-3xl font-semibold text-left p-4">Cart</h5>
      <div>
        <div className="justify-center flex flex-col items-center">
          {products.map((product, el) => {
            if (cartItems[product.id] !== 0) {
              return (
                <div key={el} className="p-4 sm:w-2/3 md:w-3/5">
                  <div className="flex flex-row h-48 min-w-96 border shadow-lg rounded-xl">
                    <div className="w-40">
                      <img
                        src={product.image}
                        alt=""
                        className="rounded-lg object-cover h-48"
                      />
                    </div>

                    <div className="w-full">
                      <div className="flex justify-between p-3">
                        <p className="text-black">{product.productTitle}</p>
                        <button
                          onClick={() => {
                            removeFromCart2(product.id);
                          }}
                          className="bg-black rounded-full flex justify-center items-center w-8 h-8"
                        >
                          <FaTrashAlt color="white" />
                        </button>
                      </div>

                      <div className="mt-12 p-3 flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{product.productName}</p>
                          <p className="text-black">${product.productPrice}</p>
                        </div>

                        <div className="flex items-center gap-3 justify-center h-10 bg-black rounded-3xl">
                          <div
                            className="items-center flex ml-2"
                            onClick={() => {
                              removeFromCart(product.id);
                            }}
                          >
                            <FaMinus color="white" />
                          </div>
                          <input
                            className="w-5 bg-black text-white"
                            value={cartItems[product.id]}
                            onChange={(e) =>
                              updateCartItemCount(Number(e.target.value), product.id)
                            }
                          />
                          <div
                            className="items-center flex mr-2"
                            onClick={() => {
                              addToCart(product.id);
                            }}
                          >
                            <FaPlus color="white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />
                </div>
              );
            }
          })}
        </div>

        {isCartEmpty ? (
          <div className="p-4 flex items-center justify-center flex-col">
            <p>YOUR CART IS EMPTY</p>
            <div
              className="p-2 flex bg-black text-white justify-center items-center mt-8 w-1/2 rounded-3xl font-bold cursor-pointer"
              onClick={() => {
                navigate("/"); // Navigate back to the homepage
              }}
            >
              Continue Shopping
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="p-4 w-2/3 sm:w-3/2">
              <div className="flex flex-row justify-between mt-3 w-full">
                <p className="font-semibold">SUBTOTAL</p>
                <p className="font-semibold">$ {totalAmount}</p>
              </div>

              <div className="flex items-center justify-center cursor-pointer h-10 w-full bg-black text-white mt-4 rounded-3xl p-2 m-2 md:w-80%">
                <button onClick={handleProceedToBuy}>Proceed To Buy</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
