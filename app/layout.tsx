import { PropsWithChildren } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StoreProvider from "@/providers/StoreProvider";

import Header from "@/layout/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products | E-Commerce",
  description: "Buy everything you want!",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
