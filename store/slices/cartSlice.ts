import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/types/Product";

import { RootState } from "..";

export interface CartProduct {
  quantity: number;
  product: Product;
}

export interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find(
        (cartProduct) => cartProduct.product.id === action.payload.id
      );

      if (existingProduct) {
        state.products = state.products.map((cartProduct) => {
          if (cartProduct.product.id === action.payload.id) {
            return { ...cartProduct, quantity: cartProduct.quantity + 1 };
          }

          return cartProduct;
        });
      } else {
        state.products.push({ quantity: 1, product: action.payload });
      }
    },

    removeProduct: (state, action: PayloadAction<Product["id"]>) => {
      state.products = state.products.filter(
        (cartProduct) => cartProduct.product.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.products = [];
    },
  },
});

export default cartSlice.reducer;

/* Action Creators */
export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

/* Select Creators */
export const selectCartProducts = (state: RootState) => state.cart.products;
export const selectCartTotal = (state: RootState) =>
  state.cart.products.reduce((acc, p) => acc + p.quantity * p.product.price, 0).toFixed(2);
