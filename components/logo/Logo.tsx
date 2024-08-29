"use client";

import React from "react";

import { useRouter } from "next/navigation";

import Button from "../buttons/Button";

const Logo = () => {
  const router = useRouter();

  return (
    <Button
      color="transparent"
      onClick={() => router.push("/")}
      className="text-xl md:text-3xl font-medium no-underline flex-shrink-0"
    >
      E-Commerce
    </Button>
  );
};

export default Logo;
