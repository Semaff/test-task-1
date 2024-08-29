import React from "react";

import Cart from "@/components/cart/Cart";
import Logo from "@/components/logo/Logo";

const Header = () => {
  return (
    <header className="w-full max-w-5xl mx-auto p-6 border-b border-b-black flex flex-wrap items-center justify-between gap-3">
      <Logo />
      <Cart />
    </header>
  );
};

export default Header;
