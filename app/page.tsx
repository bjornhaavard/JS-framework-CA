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

      <div className="flex-wrap-center">
        {displayProducts.map((product, index) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <Image src={product.image.url} alt={product.image.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} priority={index === 0} />
            </div>
            <div className="card-container">
              <h2 className="card-h2">{product.title}</h2>
              <p className="card-p">Price: ${product.price}</p>
            </div>
            <div className="button-container">
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
