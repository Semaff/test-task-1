"use client";

import React, { ChangeEvent, useState } from "react";

import useProductsPagination from "@/hooks/useProductsPagination";

import { Product as TProduct } from "@/types/Product";

import SearchInput from "../inputs/SearchInput";
import SortSelect, { SortSelectValue } from "../selects/SortSelect";

import Product from "./Product";

const widthClassName = "w-fit mx-auto";
const gridClassName =
  "grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 sm:gap-y-14 gap-x-14";

interface ProductsListProps {
  initialProducts: TProduct[];
}

const ProductsList = ({ initialProducts }: ProductsListProps) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortSelectValue>("price");

  const { ref, products } = useProductsPagination({ initialProducts, search, sort });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as SortSelectValue);
  };

  return (
    <React.Fragment>
      <SearchInput value={search} onChange={handleSearch} />
      <SortSelect value={sort} onChange={handleSort} />

      <div className={`${gridClassName} ${widthClassName} my-6 sm:my-10`}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {products.length > 0 && !search && <div className="opacity-0" ref={ref} />}
    </React.Fragment>
  );
};

export default ProductsList;
