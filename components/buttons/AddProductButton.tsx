"use client";

import React, { MouseEvent, useCallback } from "react";

import { useAppDispatch } from "@/store";
import { addProduct } from "@/store/slices/cartSlice";

import { Product } from "@/types/Product";

import Button from "./Button";

interface AddProductButtonProps {
  product: Product;
}

const AddProductButton = ({ product }: AddProductButtonProps) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      dispatch(addProduct(product));
    },
    [product]
  );

  return (
    <Button onClick={handleAddProduct} className="mt-3 text-base font-medium">
      Add To Cart
    </Button>
  );
};

export default AddProductButton;
