import React from "react";
import List from "./List";
import Last from "./Last";

const Home = () => {
  return <div className="min-h-screen bg-white w-full">
  <div className="flex w-full flex-col sm:flex-row sm:h-[80%] h-screen bg-pink-300">
    <div className="sm:w-[45%] w-full h-1/2 sm:h-[500px] bg-white flex items-center justify-center">
      <div className="flex items-center flex-col gap-2 p-2">
        <p className="text-2xl font-semibold">Happy Lunar New Year</p>
        <p className="text-center md:text-left">This Lunar New Year, Tiffany & Co. celebrates the bonds we share and the love that has inspired us since 1837.</p>
        <p className="border p-2 border-black">Shop Now </p>
      </div>
    </div>
    <div className="w-full h-1/2 sm:h-[500px]">
      <img src="/12.jpg" alt="" className="w-full h-full object-cover" />
    </div>
  </div>
  <List />
  <Last />
</div>
};

export default Home;
