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

import { GetStaticProps, GetStaticPropsContext } from "next";

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const params = context.params;
  const id = params?.id as string;
  const product = await getProduct(id);

  return {
    props: {
      product,
    },
  };
};

export default function ProductDetail({ product }: { product: Product }): JSX.Element {
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
