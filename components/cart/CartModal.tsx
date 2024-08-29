import React, { useCallback, useState } from "react";

import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/store";
import { CartProduct, clearCart, selectCartTotal } from "@/store/slices/cartSlice";

import CloseIcon from "@/public/close.svg";

import Button from "../buttons/Button";

import CartList from "./CartList";

interface CartModalProps {
  cartProducts: CartProduct[];
  toggleCart: () => void;
}

const CartModal = ({ cartProducts, toggleCart }: CartModalProps) => {
  const [showNotifier, setShowNotifier] = useState(false);

  const cartTotal = useAppSelector(selectCartTotal);

  const dispatch = useAppDispatch();

  const handleClear = useCallback(() => {
    dispatch(clearCart());
  }, []);

  const handleProceed = useCallback(() => {
    dispatch(clearCart());

    setShowNotifier(true);

    setTimeout(() => {
      setShowNotifier(false);
    }, 2000);
  }, [cartProducts]);

  return (
    <section className="fixed right-0 top-0 h-screen shadow-md w-screen sm:w-[576px] bg-white p-8 flex flex-col">
      <div className="flex items-center justify-between border-b border-b-gray-400 p-4">
        <h2 className="text-2xl font-medium">Your Cart</h2>

        <Image
          width={24}
          height={24}
          src={CloseIcon}
          alt="Close"
          className="cursor-pointer"
          onClick={toggleCart}
        />
      </div>

      {showNotifier && (
        <p className="px-2 py-6 sm:p-6 text-xl text-center">Successfully purchased the products!</p>
      )}

      <CartList cartProducts={cartProducts} />

      <div className="mt-auto border-t border-t-black text-right pt-4 flex flex-col sm:flex-row items-end sm:items-center justify-between flex-wrap gap-3">
        <h4>Total: {cartTotal} $</h4>

        <div>
          <Button onClick={handleClear} color="transparent">
            Clear
          </Button>

          <Button
            disabled={cartProducts.length === 0}
            onClick={handleProceed}
            className="text-base font-medium ml-6"
          >
            Proceed
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartModal;
