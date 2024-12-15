"use client";

import { useState } from "react";
import { Input } from "react-daisyui";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
}

interface ProductFilterProps {
  productList: Product[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({ productList }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterProducts = productList.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="relative w-full mx-auto p-4 max-w-xs">
      <Input placeholder="Search products here" className="w-full max-w-xs search-form" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value.trim())} />
      {filterProducts.length > 0 && searchTerm.length > 0 && (
        <ul className="absolute left-5 right-5 z-30 bg-gray-700">
          {filterProducts.map((product) => {
            return (
              <li key={product.id}>
                <Link href={`/product/${product.id}`} className="block p-4 hover:bg-gray-600">
                  <span className="text-white">{product.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ProductFilter;
