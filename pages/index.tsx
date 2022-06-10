import type { NextPage } from "next";
import Map from "react-map-gl";

const Home: NextPage = () => {
  return (
    <Map
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: 13.403,
        latitude: 52.53,
        zoom: 10,
      }}
      style={{ width: "100%", height: "100vh" }}
    />
  );
};

export default Home;
