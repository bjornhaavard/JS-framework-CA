"use client";

import { useEffect, useState } from "react";
import React from "react";
import useCartStore from "../store/userCartStore";
import Link from "next/link";
import Image from "next/image";

const ShoppingCart: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) {
    return (
      <>
        <section className="blue-container">
          <h1 className="heading">Shopping Cart</h1>
        </section>
        <div className="max-w-4xl mx-auto mt-8 p-4 border rounded shadow-lg mb-20">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="blue-container">
        <h1 className="heading">Shopping Cart</h1>
      </section>
      <div className="max-w-4xl mx-auto mt-8 p-4 border rounded shadow-lg mb-20">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
        {items.length === 0 ? (
          <p className="text-gray-800">Your cart is empty</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between mb-2">
                <Image src={item.image.url} alt={item.title} width={64} height={64} className="object-cover mr-4 mb-2 sm:mb-0" />
                <span className="text-gray-800 mb-2 sm:mb-0">
                  {item.title} - ${item.price}
                </span>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 bg-gray-800 rounded">
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-16 mx-2 px-2 py-1 border rounded text-gray-800"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-800 rounded">
                    +
                  </button>
                  <button onClick={() => removeItem(item.id)} className="ml-2 px-2 py-1 bg-gray-800 rounded">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <strong className="text-gray-800">Total: ${totalPrice.toFixed(2)}</strong>
            </div>
            <button onClick={clearCart} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">
              Clear Cart
            </button>
            <button
              onClick={() => {
                clearCart();
              }}
              className="mt-4 ml-0 sm:ml-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
            >
              <Link href="/checkoutSuccess">Checkout</Link>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
