import { Product } from "@/types/Product";

export default async function getProduct(id: string) {
  try {
    const data = await fetch(
      `https://my-json-server.typicode.com/Semaff/test-task-1/products/${id}`
    );

    const product = await data.json();

    return product as Product;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`An error happened: ${error}`);
  }
}
