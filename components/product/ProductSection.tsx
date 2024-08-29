"use client";

import React from "react";

import Image from "next/image";

import { CURRENCY_MARK_MAP } from "@/constants";

import { Product } from "@/types/Product";

import AddProductButton from "../buttons/AddProductButton";

interface ProductSectionProps {
  product: Product;
}

const ProductSection = ({ product }: ProductSectionProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center gap-4 sm:gap-8">
      <Image width={400} height={500} src={product.image} alt={product.title} />

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h4 className="mt-2 sm:mt-4 text-4xl font-medium">{product.title}</h4>

        <p className="mt-3 text-xl">{product.description}</p>

        <h5 className="mt-2 text-lg font-bold">
          {product.price} {CURRENCY_MARK_MAP[product.currency]}
        </h5>

        <h6 className="mt-1 text-base font-base font-medium">Rating: {product.rating}</h6>

        <AddProductButton product={product} />
      </div>
    </div>
  );
};

export default ProductSection;
