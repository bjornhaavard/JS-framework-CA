import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Product 1", price: 100, description: "Description for product 1" },
  { id: 2, name: "Product 2", price: 200, description: "Description for product 2" },
  { id: 3, name: "Product 3", price: 300, description: "Description for product 3" },
];

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
