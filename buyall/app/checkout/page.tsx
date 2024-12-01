"use client";

import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CheckoutPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Fetch cart items from local storage or API
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(storedCart);
    }
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-700 text-center">Checkout</h1>
        <ul className="mb-4">
          {cart.map((product) => (
            <li key={product.id} className="flex justify-between items-center p-2 border-b border-gray-200 text-gray-700">
              <span>{product.name}</span>
              <span>
                ${product.price} x {product.quantity}
              </span>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold text-gray-700 text-center">Total: ${calculateTotal().toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CheckoutPage;
