import { useQuery } from "react-query";
import APIClient from "../services/ApiClient";

const apiClient = new APIClient("/users");

export const useAllUsers = () => {
  const queryKey = "users";
  return useQuery(queryKey, () => {
    return apiClient.getAll();
  });
};
