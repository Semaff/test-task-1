import React from "react";

import { Metadata } from "next";
import { redirect } from "next/navigation";

import getProduct from "@/api/getProduct";

import ProductSection from "@/components/product/ProductSection";

import { PageProps } from "@/types/PageProps";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (Object.keys(product).length === 0) {
    redirect("/");
  }

  return {
    title: `${product.title} | E-Commerce `,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.id);

  return <ProductSection product={product} />;
}
