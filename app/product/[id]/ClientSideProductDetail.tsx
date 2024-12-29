"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import useCartStore from "../../store/userCartStore";

interface Product {
  id: number;
  name: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  image: {
    url: string;
    alt: string;
  };
}

export default function ClientSideProductDetail({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addItem);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    setIsAnimating(true);
    addToCart(product);
    setTimeout(() => setIsAnimating(false), 1000); // Reset after animation duration
  };

  return (
    <div className="flex space-x-4 mb-5">
      <button onClick={handleAddToCart} className={`button-gray flex items-center justify-center w-28 h-10 ${isAnimating ? "animate-add-to-cart" : ""}`} disabled={isAnimating}>
        <span className={`add-to-cart-text ${isAnimating ? "hidden" : "inline-block"}`}>Add to Cart</span>
        <Check className={`add-to-cart-check ${isAnimating ? "inline-block" : "hidden"}`} size={24} />
      </button>
      <button className="button-blue">
        <Link href="/">Back to Products</Link>
      </button>
    </div>
  );
}
