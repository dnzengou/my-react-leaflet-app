import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
/*import teslaData from "./data/tesla-sites.json"*/
import parkData from "./data/skateboard-parks.json"
import "leaflet/dist/leaflet.css";
import './App.css';

import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

function App() {
    
  return (
   
    <MapContainer center={[4.389955, 18.548918]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
          
          {parkData.features.map(park => (
              < Marker
                  key={park.properties.PARK_ID}
                  position={[
                      park.geometry.coordinates[1],
                      park.geometry.coordinates[0]
                  ]}
               />          
          ))}
          
      <Marker position={[4.389955, 18.548918]}>
        <Popup>
          It starts <br /> here!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
