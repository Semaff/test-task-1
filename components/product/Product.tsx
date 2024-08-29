import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { CURRENCY_MARK_MAP } from "@/constants";

import { Product as TProduct } from "@/types/Product";

import AddProductButton from "../buttons/AddProductButton";

interface ProductProps {
  product: TProduct;
}

const Product = ({ product }: ProductProps) => {
  const router = useRouter();

  const handleRedirectToProductPage = () => {
    router.push(`/${product.id}`);
  };

  return (
    <div
      onClick={handleRedirectToProductPage}
      role="button"
      className="flex flex-col items-center text-center w-full max-w-72"
    >
      <Image width={200} height={200} src={product.image} alt={product.title} />

      <h4 className="mt-4 text-2xl font-medium">{product.title}</h4>

      <p className="mt-3 text-base">{product.description}</p>

      <h5 className="mt-2 font-bold">
        {product.price} {CURRENCY_MARK_MAP[product.currency]}
      </h5>

      <h6 className="mt-1 font-base font-medium">Rating: {product.rating}</h6>

      <AddProductButton product={product} />
    </div>
  );
};

export default Product;
