"use client";

import React, { useCallback, useState } from "react";

import Image from "next/image";

import { useAppSelector } from "@/store";

import { selectCartProducts, selectCartTotal } from "@/store/slices/cartSlice";

import CartIcon from "@/public/cart.svg";

import CartModal from "./CartModal";

const Cart = () => {
  const [show, setShow] = useState(false);

  const toggleCart = useCallback(() => setShow((prev) => !prev), []);

  const cartProducts = useAppSelector(selectCartProducts);
  const cartTotal = useAppSelector(selectCartTotal);

  const count = cartProducts.length;

  return (
    <React.Fragment>
      <button type="button" className="flex items-center gap-4" onClick={toggleCart}>
        <h4>
          <span className="hidden sm:inline">Total:</span> {cartTotal} $
        </h4>

        <div className="relative">
          <Image priority src={CartIcon} alt="Cart" />

          {count > 0 && (
            <span className="absolute top-full left-full -ml-4 -mt-4 w-7 h-7 rounded-full bg-slate-500 text-white p-2 flex items-center justify-center text-xs text-center shrink-0">
              {count}
            </span>
          )}
        </div>
      </button>

      {show && <CartModal cartProducts={cartProducts} toggleCart={toggleCart} />}
    </React.Fragment>
  );
};

export default Cart;
