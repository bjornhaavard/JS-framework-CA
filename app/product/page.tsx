"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);

          const product = await response.json();

          setProduct(product);
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
        <h1 className="heading">{product.name}</h1>
      </section>
      <div>
        <Image src={product.image.url} alt={product.image.alt} width={500} height={500} />

        <p>{product.description}</p>

        <p>Price: ${product.price}</p>

        <Link href="/products">
          <a>Back to Products</a>
        </Link>
      </div>
    </>
  );
};

export default ProductDetail;
