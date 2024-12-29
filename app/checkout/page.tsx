"use client";

// Ensure the preloaded resource is used appropriately or remove the preload link if not necessary
if (typeof document !== "undefined") {
  const preloadLink = document.querySelector('link[rel="preload"][href*="4473ecc91f70f139-s.p.woff"]');
  if (preloadLink) {
    preloadLink.remove();
  }
}

import { useEffect, useState } from "react";
import React from "react";
import useCartStore from "../store/userCartStore";
import Link from "next/link";
import Image from "next/image";
import LoadingCart from "../components/Ui/loadingCart";
import { BlueContainerCart } from "../components/Ui/BlueContainer";

const ShoppingCart: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) {
    return (
      <>
        <LoadingCart items={items} />
      </>
    );
  }

  return (
    <>
      <BlueContainerCart />
      <div className="max-w-4xl mx-auto mt-8 p-4 border rounded shadow-lg mb-20">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Items in cart</h2>
        {items.length === 0 ? (
          <p className="text-gray-800">Your cart is empty</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between mb-2 pb-2 border-b border-gray-200 last:border-b-0">
                <div className="relative w-16 h-16 mr-4 mb-2 sm:mb-0">
                  <Image src={item.image.url} alt={item.title} fill sizes="64px" className="object-cover rounded" />
                </div>
                <span className="text-gray-800 mb-2 sm:mb-0">
                  {item.title} - ${item.price}
                </span>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 bg-gray-800 text-white rounded">
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-16 mx-2 px-2 py-1 border rounded text-gray-800"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-800 text-white rounded">
                    +
                  </button>
                  <button onClick={() => removeItem(item.id)} className="ml-2 px-2 py-1 button-gray">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <strong className="text-gray-800">Total: ${totalPrice.toFixed(2)}</strong>
            </div>
            <div className="flex justify-flex-start">
              <button onClick={clearCart} className="mt-4 mr-4 px-4 py-2 button-gray">
                Clear Cart
              </button>
              <Link href="/checkoutSuccess" className="mt-4 ml-0 sm:ml-4">
                <button onClick={clearCart} className="button-green px-4 py-2">
                  Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
