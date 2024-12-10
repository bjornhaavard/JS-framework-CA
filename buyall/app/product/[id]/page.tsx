"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  rating: number;
  price: number;
  image: {
    url: string;
    alt: string;
  };
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
          const data = await response.json();
          //   const product = data.data;
          // Ensure data structure matches Product interface
          console.log("Fetched Product Data:", data.data);

          // Assuming the product is in data.data, adjust if needed
          if (data && data.data) {
            setProduct(data.data);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="blue-container">
        <h1 className="heading">{product.title}</h1>
      </section>
      <div className="flex flex-col md:flex-row items-center md:items-start p-4 bg-white shadow-md rounded-lg">
        {product.image && (
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <Image src={product.image.url} alt={product.image.alt} width={500} height={500} className="rounded-lg" unoptimized />
          </div>
        )}
        <div className="w-full md:w-1/2 md:pl-4">
          <p className="text-lg font-semibold mb-2">{product.description}</p>
          <p className="text-xl font-bold text-gray-800 mb-2">Price: ${product.price}</p>
          <p className="text-sm text-gray-600 mb-4">Rating: {product.rating}</p>
          <button
            style={{ backgroundColor: "#4a5568", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.25rem", cursor: "pointer", transition: "background-color 0.3s" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2d3748")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4a5568")}
          >
            Add to Cart
          </button>
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
