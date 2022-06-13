import useSWR from "swr";
import { VehiclesResponse } from "../types/responses";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useVehicles() {
  const { data, error } = useSWR<VehiclesResponse, Error>(
    "/api/vehicles",
    fetcher
  );

  return {
    data,
    error,
  };
}
