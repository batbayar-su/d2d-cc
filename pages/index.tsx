import type { NextPage } from "next";
import { useMemo } from "react";
import TrackerMap from "../components/TrackerMap";
import { useVehicles } from "../hooks/useVehicles";
import { vehilesResponseToFeatureCollection } from "../lib/vehilesResponseToFeatureCollection";

const Home: NextPage = () => {
  const { data } = useVehicles();
  const locations = useMemo(
    () => vehilesResponseToFeatureCollection(data),
    [data]
  );

  return <TrackerMap locations={locations} />;
};

export default Home;
