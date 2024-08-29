import React from "react";

import ProductsList from "@/components/product/ProductsList";

import getProducts from "@/api/getProducts";

const INITIAL_NUMBER_OF_PRODUCTS = 10;

export default async function Home() {
  const initialProducts = await getProducts(0, INITIAL_NUMBER_OF_PRODUCTS);

  return (
    <main className="w-full max-w-5xl mx-auto px-3">
      <ProductsList initialProducts={initialProducts} />
    </main>
  );
}
