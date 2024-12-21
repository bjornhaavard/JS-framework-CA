import React, { useEffect, useState } from "react";

interface Item {
  price: number;
  quantity: number;
}

interface LoadingCartProps {
  items: Item[];
}

const LoadingCart: React.FC<LoadingCartProps> = ({ items }) => {
  const [loading] = useState(true);

  if (loading) {
    return (
      <>
        <section className="blue-container">
          <h1 className="heading">Shopping Cart</h1>
        </section>
        <div className="max-w-4xl mx-auto mt-8 p-4 border rounded shadow-lg mb-20">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Loading...</h2>
          <div className="animate-pulse">
            {items.map((_item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-between mb-2">
                <div className="w-16 h-16 bg-gray-300 rounded mr-4 mb-2 sm:mb-0"></div>
                <div className="flex-1 h-6 bg-gray-300 rounded mb-2 sm:mb-0"></div>
                <div className="w-32 h-6 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return null; // This component doesn't render anything when not loading
};

export default LoadingCart;
