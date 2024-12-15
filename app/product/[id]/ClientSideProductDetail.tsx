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
    <div className="flex space-x-4 mb-5">
      <button onClick={() => addToCart(product)} className="button-grey">
        Add to Cart
      </button>
      <button className="button-blue">
        <Link href="/">Back to Products</Link>
      </button>
    </div>
  );
}
