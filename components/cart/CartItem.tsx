import React, { useCallback } from "react";

import Image from "next/image";

import { useAppDispatch } from "@/store";
import { CartProduct, removeProduct } from "@/store/slices/cartSlice";

import { CURRENCY_MARK_MAP } from "@/constants";

import Button from "../buttons/Button";

interface CartItemProps {
  cartProduct: CartProduct;
}

const CartItem = ({ cartProduct }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveProduct = useCallback(() => {
    dispatch(removeProduct(cartProduct.product.id));
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-8 text-center sm:text-left">
      <Image
        width={100}
        height={100}
        src={cartProduct.product.image}
        alt={cartProduct.product.title}
      />

      <div className="flex flex-col items-center sm:items-start">
        <div>
          <h5 className="text-lg font-medium">{cartProduct.product.title}</h5>
          <p className="text-base mt-1">{cartProduct.product.description}</p>
        </div>

        <h6 className="font-medium mt-1">
          {cartProduct.quantity} x {cartProduct.product.price}{" "}
          {CURRENCY_MARK_MAP[cartProduct.product.currency]}
        </h6>

        <Button onClick={handleRemoveProduct} color="transparent" className="font-medium mt-1">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
