"use client";

import Link from "next/link";
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

  return (
    <div className="flex space-x-4">
      <button onClick={() => addToCart(product)} className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
        Add to Cart
      </button>
      <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
        <Link href="/">Back to Products</Link>
      </button>
    </div>
  );
}
