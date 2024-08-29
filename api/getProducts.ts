import { Product } from "@/types/Product";

export default async function getProducts(
  start: number,
  limit: number,
  search?: string,
  sort?: string
) {
  try {
    const query = `_limit=${limit}&_start=${start}&title_like=${search || ""}&_sort=${
      sort || "price"
    }`;

    const data = await fetch(
      `https://my-json-server.typicode.com/Semaff/test-task-1/products?${query}`
    );

    const products = await data.json();

    return products as Product[];
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`An error happened: ${error}`);
  }
}
