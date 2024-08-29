"use client";

import React from "react";

import { useRouter } from "next/navigation";

import Button from "./Button";

const RedirectHomeButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/")} className="my-4">
      Go Back
    </Button>
  );
};

export default RedirectHomeButton;
