import { useQuery } from "react-query";
import APIClient from "../services/ApiClient";

const apiClient = new APIClient("/products");
export const useProducts = category => {
  const queryKey = category ? ["products", { category }] : "products";

  return useQuery(queryKey, () => {
    const params = category ? { category } : {};
    return apiClient.getAll({ params });
  });
};

export default useProducts;
