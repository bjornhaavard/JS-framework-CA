// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import useCartStore from "../../store/userCartStore";

// interface Product {
//   id: number;
//   name: string;
//   title: string;
//   description: string;
//   rating: number;
//   price: number;
//   image: {
//     url: string;
//     alt: string;
//   };
// }

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const addToCart = useCartStore((state) => state.addItem);

//   useEffect(() => {
//     if (id) {
//       const fetchProduct = async () => {
//         try {
//           const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
//           const data = await response.json();

//           // Ensure data structure matches Product interface
//           console.log("Fetched Product Data:", data.data);

//           // Check if data is not null and has a data property
//           if (data && data.data) {
//             setProduct(data.data);
//           }
//         } catch (error) {
//           console.error("Error fetching product:", error);
//         }
//       };

//       fetchProduct();
//     }
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <section className="blue-container">
//         <h1 className="heading">{product.title}</h1>
//       </section>
//       <div className="flex flex-col md:flex-row items-center md:items-start p-6 bg-white shadow-lg rounded-lg">
//         {product.image && (
//           <div className="w-full md:w-1/2 mb-4 md:mb-0">
//             <Image src={product.image.url} alt={product.image.alt} width={500} height={500} className="rounded-lg object-cover" unoptimized />
//           </div>
//         )}
//         <div className="w-full md:w-1/2 md:pl-6">
//           <p className="text-lg font-semibold mb-4 text-gray-800">{product.description}</p>
//           <p className="text-2xl font-bold text-gray-800 mb-4">Price: ${product.price}</p>
//           <p className="text-sm text-gray-600 mb-6">Rating: {product.rating}</p>
//           <div className="flex space-x-4">
//             <button onClick={() => addToCart(product)} className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
//               Add to Cart
//             </button>
//             <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
//               <Link href="/">Back to Products</Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetail;

import Image from "next/image";
import ClientSideProductDetail from "./ClientSideProductDetail";

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

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const data = await res.json();
  return data.data;
}

export async function generateStaticParams() {
  // Fetch all product IDs
  const res = await fetch("https://v2.api.noroff.dev/online-shop");
  const data = await res.json();

  return data.data.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <>
      <section className="blue-container">
        <h1 className="heading">{product.title}</h1>
      </section>
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 bg-white shadow-lg rounded-lg">
        {product.image && (
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <Image src={product.image.url} alt={product.image.alt} width={500} height={500} className="rounded-lg object-cover" unoptimized />
          </div>
        )}
        <div className="w-full md:w-1/2 md:pl-6">
          <p className="text-lg font-semibold mb-4 text-gray-800">{product.description}</p>
          <p className="text-2xl font-bold text-gray-800 mb-4">Price: ${product.price}</p>
          <p className="text-sm text-gray-600 mb-6">Rating: {product.rating}</p>
          <ClientSideProductDetail product={product} />
        </div>
      </div>
    </>
  );
}
