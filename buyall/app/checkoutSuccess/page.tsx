"use client";

import React from "react";

const CheckoutSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Thank you for your purchase!</h1>
        <p className="text-gray-700 mb-6">Your order has been successfully placed. We appreciate your business!</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300" onClick={() => (window.location.href = "/products")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
