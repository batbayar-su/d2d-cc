import type { VehiclesResponse } from "../types/responses";

export const vehilesResponseToFeatureCollection = (
  vehicles?: VehiclesResponse
): GeoJSON.FeatureCollection => {
  const features =
    vehicles?.map(
      (vehicle): GeoJSON.Feature => ({
        type: "Feature",
        geometry: locationToPoint(vehicle.locations[0]),
        properties: {},
      })
    ) || [];

  return {
    type: "FeatureCollection",
    features,
  };
};

const locationToPoint = (location: {
  latitude: string;
  longitude: string;
}): GeoJSON.Geometry => ({
  type: "Point",
  coordinates: [Number(location.longitude), Number(location.latitude)],
});
