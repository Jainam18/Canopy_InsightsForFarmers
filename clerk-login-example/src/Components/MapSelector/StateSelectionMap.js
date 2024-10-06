import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import usStatesData from './geo_data_states.json';

const MapWrapper = styled.div`
  height: 600px;
  width: 100%;
  z-index: 0;
`;

const Banner = styled.h1`
  text-align: center;
  color: #4CAF50;
`;

const StateSelectionMap = () => {
  const navigate = useNavigate();

  const handleStateClick = (event) => {
    const stateName = event.target.feature.properties.NAME;

    navigate(`/farm-selection/${stateName}`);
  };

  return (
    <div>
      <Banner>Select your State</Banner>
      <MapWrapper>
        <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON
            data={usStatesData}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: handleStateClick
              });
            }}
          />
        </MapContainer>
      </MapWrapper>
    </div>
  );
};

export default StateSelectionMap;