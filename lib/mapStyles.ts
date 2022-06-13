import { LayerProps } from "react-map-gl";

export const CLUSTER_LAYER: LayerProps = {
  id: "clusters",
  type: "circle",
  source: "locations",
  filter: ["has", "point_count"],
  paint: {
    "circle-color": "#51bbd6",
    "circle-radius": [
      "step",
      ["get", "point_count"],
      20,
      5,
      30,
      10,
      40,
      20,
      60,
    ],
  },
};

export const CLUSTER_COUNT_LAYER: LayerProps = {
  id: "cluster-count",
  type: "symbol",
  source: "locations",
  filter: ["has", "point_count"],
  layout: {
    "text-field": "{point_count_abbreviated}",
    "text-size": 12,
  },
};

export const UNCLUSTERED_LAYER: LayerProps = {
  id: "unclustered-point",
  type: "circle",
  source: "locations",
  filter: ["!", ["has", "point_count"]],
  paint: {
    "circle-color": "#51bbd6",
    "circle-radius": 8,
    "circle-stroke-width": 1,
    "circle-stroke-color": "#fff",
  },
};
