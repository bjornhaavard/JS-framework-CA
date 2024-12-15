// import Image from "next/image";
// import ClientSideProductDetail from "./ClientSideProductDetail";

// interface Product {
//   id: number;
//   name: string;
//   title: string;
//   description: string;
//   rating: number;
//   price: number;
//   reviews: Array<{
//     description: string;
//     username: string;
//     rating: number;
//     id: number;
//   }>;
//   image: {
//     url: string;
//     alt: string;
//   };
// }

// async function getProduct(id: string): Promise<Product> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
//   const data = await res.json();
//   return data.data;
// }

// export async function generateStaticParams() {
//   // Fetch all product IDs
//   const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
//   const data = await res.json();

//   return data.data.map((product: Product) => ({
//     id: product.id.toString(),
//   }));
// }

// import { GetStaticPropsContext } from "next";

// export default async function ProductDetail(context: GetStaticPropsContext): Promise<JSX.Element> {
//   const params = await context.params;
//   const id = params?.id as string;
//   const product = await getProduct(id);

//   return (
//     <>
//       <section className="blue-container ">
//         <h1 className="heading">{product.title}</h1>
//       </section>
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="flex flex-col md:flex-col items-center md:items-start p-6 mb-12 bg-white shadow-lg rounded-lg max-w-4xl">
//           {product.image && (
//             <div className="w-full md:w-1/2 mb-4 md:mb-0">
//               <Image src={product.image.url} alt={product.image.alt} width={500} height={500} className="rounded-lg object-cover" unoptimized />
//             </div>
//           )}
//           <div className="w-full md:w-1/2 md:pl-1 mt-6 md:mt-0">
//             <p className="text-2xl font-bold text-gray-800 mb-4">Price: ${product.price}</p>

//             <p className="text-sm text-gray-600 mb-6">Rating: {product.description}</p>
//             <p className="text-sm text-gray-600 mb-6">Rating: {product.rating}</p>
//           </div>
//           <div className="w-full mt-6">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">User Reviews</h2>
//             <hr className="my-6 border-gray-300" />
//             {product.reviews.length > 0 ? (
//               product.reviews.map((review) => (
//                 <div key={review.id} className="mb-4 p-4 border rounded-lg bg-gray-50">
//                   <p className="text-lg font-semibold text-gray-800">{review.username}</p>
//                   <p className="text-gray-700">{review.description}</p>
//                   <p className="text-sm text-gray-600">Rating: {review.rating}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-700">No reviews yet.</p>
//             )}
//           </div>

//           <div className="w-full mt-6"></div>
//           <ClientSideProductDetail product={product} />
//         </div>
//       </div>
//     </>
//   );
// }

import Image from "next/image";
import ClientSideProductDetail from "./ClientSideProductDetail";
import { notFound } from "next/navigation";

interface Product {
  id: number;
  name: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  reviews: Array<{
    description: string;
    username: string;
    rating: number;
    id: number;
  }>;
  image: {
    url: string;
    alt: string;
  };
}

interface PageProps {
  params: {
    id: string;
  };
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product with id ${id}`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data.data.map((product: Product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function ProductDetail({ params }: PageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="blue-container">
        <h1 className="heading">{product.title}</h1>
      </section>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-col items-center md:items-start p-6 mb-12 bg-white shadow-lg rounded-lg max-w-4xl">
          {product.image && (
            <div className="w-full md:w-1/2 mb-4 md:mb-0 aspect-square relative">
              <Image src={product.image.url} alt={product.image.alt} fill className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
            </div>
          )}
          <div className="w-full md:w-1/2 md:pl-1 mt-6 md:mt-0">
            <p className="text-2xl font-bold text-gray-800 mb-4">Price: ${product.price}</p>
            <p className="text-sm text-gray-600 mb-6">Description: {product.description}</p>
            <p className="text-sm text-gray-600 mb-6">Rating: {product.rating}</p>
          </div>
          <div className="w-full mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">User Reviews</h2>
            <hr className="my-6 border-gray-300" />
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <div key={review.id} className="mb-4 p-4 border rounded-lg bg-gray-50">
                  <p className="text-lg font-semibold text-gray-800">{review.username}</p>
                  <p className="text-gray-700">{review.description}</p>
                  <p className="text-sm text-gray-600">Rating: {review.rating}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No reviews yet.</p>
            )}
          </div>
          <div className="w-full mt-6">
            <ClientSideProductDetail product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
