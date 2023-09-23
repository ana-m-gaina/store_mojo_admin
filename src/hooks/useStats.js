import { useQuery } from "react-query";
import APIClient from "../services/ApiClient";

const apiClientStats = new APIClient("/users/stats");

export const useStats = () => {
  const queryKey = "stats";
  return useQuery(queryKey, () => {
    return apiClientStats.getAll();
  });
};
