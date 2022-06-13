import Map, {
  FullscreenControl,
  GeolocateControl,
  Layer,
  NavigationControl,
  ScaleControl,
  Source,
} from "react-map-gl";
import {
  CLUSTER_COUNT_LAYER,
  CLUSTER_LAYER,
  UNCLUSTERED_LAYER,
} from "../lib/mapStyles";

const TrackerMap = ({
  locations,
}: {
  locations: GeoJSON.FeatureCollection;
}) => {
  return (
    <Map
      reuseMaps
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: 13.403,
        latitude: 52.53,
        zoom: 10,
      }}
      style={{ width: "100%", height: "100vh" }}
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />

      <Source
        id="locations"
        type="geojson"
        data={locations}
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...CLUSTER_LAYER} />
        <Layer {...CLUSTER_COUNT_LAYER} />
        <Layer {...UNCLUSTERED_LAYER} />
      </Source>
    </Map>
  );
};

export default TrackerMap;
