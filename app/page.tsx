"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import useCartStore from "./store/userCartStore";
import ProductFilter from "./product/ProductFilter";

interface Product {
  id: number;
  name: string;
  title: string;
  description: string;
  price: number;
  image: {
    url: string;
    alt: string;
  };
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    setIsClient(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
        const result = await response.json();

        if (Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          console.error("Fetched data is not an array:", result.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!isClient) {
    return null;
  }

  const displayProducts = products;

  return (
    <>
      <section className="blue-container">
        <h1 className="heading">Welcome to buyall</h1>
        <p className="sub-heading">Feel free to browse and buy items</p>
        <ProductFilter productList={products} />
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", paddingBottom: "2rem" }}>
        {displayProducts.map((product, index) => (
          <div
            key={product.id}
            style={{
              width: "300px",
              border: "1px solid #e2e8f0",
              borderRadius: "0.5rem",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              margin: "2rem 0",
            }}
          >
            <div style={{ width: "100%", paddingTop: "100%", height: "300px", position: "relative" }}>
              <Image src={product.image.url} alt={product.image.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} priority={index === 0} />
            </div>
            <div style={{ padding: "1rem", flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#2d3748" }}>{product.title}</h2>
              <div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#2d3748" }}>{product.name}</h2>
                <p style={{ color: "#4a5568", marginBottom: "1rem" }}>{product.description}</p>
              </div>
              <p style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem", color: "#2d3748" }}>Price: ${product.price}</p>
            </div>
            <div style={{ padding: "1rem", display: "flex", gap: "0.5rem" }}>
              <button className="button-gray" onClick={() => addItem(product)}>
                Add to Cart
              </button>
              <button className="button-blue" onClick={() => router.push(`/product/${product.id}`)}>
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
