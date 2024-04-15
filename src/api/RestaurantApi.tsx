import { RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (district?: string) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${district}`
    );

    if (!response.ok) {
      throw new Error("Failed to search restaurants");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants"],
    createSearchRequest,
    { enabled: !!district }
  );

  return {
    results,
    isLoading,
  };
};
