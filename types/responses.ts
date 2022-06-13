export type VehiclesResponse = {
  refId: string;
  locations: {
    longitude: string;
    latitude: string;
  }[];
}[];
