import { useCallback, useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import debounce from "debounce";

import getProducts from "@/api/getProducts";

import { Product } from "@/types/Product";

const INITIAL_OFFSET = 10;

interface UseProductsPaginationArgs {
  initialProducts: Product[];
  search: string;
  sort: string;
}

const useProductsPagination = ({ initialProducts, search, sort }: UseProductsPaginationArgs) => {
  const [products, setProducts] = useState(initialProducts);
  const [offset, setOffset] = useState(INITIAL_OFFSET);

  const { ref, inView } = useInView();

  const loadMore = useCallback(
    debounce(async (newOffset, newSearch, newSort) => {
      const newProducts = await getProducts(0, newOffset, newSearch, newSort);

      setProducts(newProducts);
    }, 500),
    []
  );

  useEffect(() => {
    if (inView) {
      setOffset((prev) => prev + INITIAL_OFFSET);
    }
  }, [inView]);

  useEffect(() => {
    loadMore(offset, search, sort);
  }, [offset, search, sort]);

  return { ref, products };
};

export default useProductsPagination;
