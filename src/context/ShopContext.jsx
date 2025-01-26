import { createContext, useState, useEffect } from "react";
import products from "../Product";
import { toast } from "react-toastify";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
 let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = props => {
  const savedCart = JSON.parse(localStorage.getItem("cartItems"));
  const initialCart = savedCart || getDefaultCart();

  const [cartItems, setCartItems] = useState(initialCart);

  // Save cartItems to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);



  const showToast = () => {
    toast.success("Item added to cart successfully!", {
      position: "top-right", 
      autoClose: 3000,
      hideProgressBar: false, 
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true, 
    });
  };
  

   const addToCart = (itemId) => {
    setCartItems((prev) => {
    const newCart = { ...prev, [itemId]: prev[itemId] + 1 };
    console.log(newCart);
  showToast() // Log the updated cart items
    return newCart;
  });
  };


  const removeFromCart = itemId => {
    if (cartItems[itemId] > 0) {
      setCartItems(prev => ({
        ...prev,
        [itemId]: prev[itemId] - 1, // Decrement quantity by 1
      }));
    }
  };

  const removeFromCart2 = itemId => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: 0, // Reset quantity to 0
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: newAmount, // Update the quantity to the new amount
    }));
  };

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const itemInfo = products.find(product => product.id === Number(item));

      // Check if itemInfo exists and if productPrice is a valid number
      if (itemInfo && !isNaN(itemInfo.productPrice)) {
        totalAmount += cartItems[item] * itemInfo.productPrice;
      } else {
        console.error(`Invalid product or price for item ${item}:`, itemInfo);
      }
    }
  }

  // Round to two decimal places
  return Math.round(totalAmount * 100) / 100; // Ensures the value has only two decimal places
};


  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItems,
    removeFromCart2,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
