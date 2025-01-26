import React, { useContext } from "react";
import products from './Product';
import { Link, Links } from "react-router-dom";

import { ShopContext } from './context/ShopContext';
import { CiShoppingCart } from "react-icons/ci";

const List = () => {
const { addToCart } = useContext(ShopContext); // Destructure the function to add items to the cart

  return <section>
    <p className="text-center font-semibold text-xl mt-5 p-2">Trending Products</p>
  <div className="flex justify-center items-center gap-8 sm:gap-3 mt-5 p-2 flex-wrap">
      {products.map((product) => (
        <a href={`product/${product.id}`} key={product.id} className="h-[270px] w-[295px] rounded-2xl z-10">
          {/* Remove Link around the image */}
        
          <img 
            src={product.image} 
            alt={product.productTitle} 
            className="w-full h-full object-cover rounded-2xl " 
          />


          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product.id)} // Adds the product to the cart
            className="absolute top-2 left-2 bg-white/40 hover:bg-white/80 text-black p-2 items-center justify-center z-40 rounded-lg hidden"
          >
            <CiShoppingCart size={30} color="black" />
          </button>

          {/* Optionally, display the number of items in the cart */}
          {/* {cartItems[product.id] > 0 && (
            <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-full">
              {cartItems[product.id]} in cart
            </div>
          )} */}
        </a>
      ))}
    </div>

<div className="p-2 mt-6">
    <p className="text-center font-bold text-xl">Shop by Category
</p>
<p className="text-center mt-2 p-2">
Tiffany & Co. designs feature the world’s finest diamonds and unparalleled craftsmanship—signatures of the House for almost two centuries.
</p>
</div>
<main>
        <div className="flex flex-wrap justify-center items-center gap-3 mt-5">

<div>
<div className="h-[210px] rounded-2xl w-[205px]">
<img src="/5.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-2xl" />
</div>
<p className="text-center mt-2 p-1">Beads</p>
</div>
<div>
<div className="h-[210px] rounded-2xl w-[205px]">
<img src="/6.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-2xl" /></div>
<p className="text-center mt-2 p-1">Beads</p>
</div>
<div>
<div className="h-[210px] rounded-2xl w-[205px]">
<img src="/7.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-2xl" /></div>
<p className="text-center mt-2 p-1">Beads</p>
</div>
<div>
<div className="h-[210px] rounded-2xl w-[205px]">
<img src="/8.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-2xl" /></div>
<p className="text-center mt-2 p-1">Beads</p>
</div>
<div>
<div className="h-[210px] rounded-2xl w-[205px]">
<img src="/9.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-2xl" /></div>
<p className="text-center mt-2 p-1">Beads</p>
</div>
<div>
<div className="h-[210px] rounded-2xl w-[205px]">
<img src="/10.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-2xl" /></div>
<p className="text-center mt-2 p-1">Beads</p>
</div>





</div>


<div className="bg-black w-full h-[400px] mt-5 rounded-2xl" >
<img src="/15.jpg" alt="" srcset="" className="w-full h-full object-cover rounded-2xl"/>
</div>

<div className="flex justify-center items-center gap-6 sm:gap-3 mt-6 p-2 flex-wrap ">
<div>
<div className="h-[270px] rounded-xl w-[295px]"> <img src="/11.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-xl"/></div>
<p className="text-center">Kettle</p>
</div>
<div>
<div className="h-[270px] rounded-xl w-[295px]"> <img src="/12.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-xl"/></div>
<p className="text-center">Lotus</p>
</div>
<div>
<div className="h-[270px] rounded-xl w-[295px]"> <img src="/13.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-xl"/></div>
<p className="text-center">Lantern</p>
</div>
<div>
<div className="h-[270px] rounded-xl w-[295px]"> <img src="/14.jpg" alt="" srcset=""  className="w-full h-full object-cover rounded-xl"/></div>
<p className="text-center">Ring</p>
</div>






</div>
</main>
</section>
};

export default List;
