import React from "react";

import { CartProduct } from "@/store/slices/cartSlice";

import CartItem from "./CartItem";

interface CartListProps {
  cartProducts: CartProduct[];
}

const CartList = ({ cartProducts }: CartListProps) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-4 overflow-x-auto">
      {cartProducts.map((cartProduct) => (
        <CartItem key={cartProduct.product.id} cartProduct={cartProduct} />
      ))}
    </div>
  );
};

export default CartList;
