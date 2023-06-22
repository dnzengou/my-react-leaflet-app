import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import portfolioData from "./data/portfolioData.json";
import { Icon } from "leaflet";
import './App.css';

import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

function App() {
  const [activePortfolio, setActivePortfolio] = useState(null);

    
  return (
   
    <MapContainer center={[4.389955, 18.548918]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
          
          {portfolioData.map(portfolio => (
              < Marker
                  key={portfolio.Topic}
                  position={[
                      portfolio.Location.Latitude,
                      portfolio.Location.Longitude
                  ]}>
                  <Popup>
                      {
                          portfolio.City
                      }
                      <div>
                          <h4>{"Topic: " + portfolio.Topic + ". Role: " + portfolio.Role}</h4>
                          <code>{"" + portfolio.Description}</code>
                      </div>
                   </Popup>
               </Marker>
          ))}
    </MapContainer>
  );
}

export default App;
