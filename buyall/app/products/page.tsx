"use client";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: {
    url: string;
    alt: string;
  };
}

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductDetailProps {
  products: Product[];
}

const ProductList = ({ products }: ProductDetailProps) => {
  return (
    <div>
      <h1>Product Details</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <Image src={product.image.url} alt={product.image.alt} width={500} height={500} />
            <Link href={`/products/${product.id}`}>View Product</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductDetail = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <Link href={`/products/${product.id}`}>
              <a>View Product</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
