import "leaflet/dist/leaflet.css";

import * as React from "react";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

import { useWeatherStore } from "@/store";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface MapProps {
  center?: number[];
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function LocationMarker() {
  const [position, setPosition] = React.useState<L.LatLng | null>(null);
  const { setLatAndLong, setFetchWeatherData } = useWeatherStore();

  const map = useMapEvents({
    async click(e) {
      map.locate();
      setLatAndLong({
        latitude: e.latlng.lat.toString(),
        longitude: e.latlng.lng.toString(),
      });

      setPosition(e.latlng);
      await setFetchWeatherData();

      console.log(e.latlng);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url={url} attribution={attribution} />
      {/* {center && <Marker position={center as L.LatLngExpression} />} */}
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
