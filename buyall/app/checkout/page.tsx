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
    // Fetch cart items from local storage or API
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <ul className="mb-4">
        {cart.map((product) => (
          <li key={product.id} className="flex justify-between items-center p-2 border-b border-gray-200">
            <span>{product.name}</span>
            <span>
              ${product.price} x {product.quantity}
            </span>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</h2>
    </div>
  );
};

export default CheckoutPage;
