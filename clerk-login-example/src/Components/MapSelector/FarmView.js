import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';

const FarmView = ({ center = [51.505, -0.09], zoom = 13 }) => {
  const mapRef = useRef(null);
  const location = useLocation();
  const { north, south, east, west } = location.state;
  center = [(north+south)/2, (east+west)/2]
  console.log("center", center, location)
  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current).setView(center, zoom);

    // Define the tile layers
    const openStreetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    });

    const esriSatelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    // Add the default layer to the map
    esriSatelliteLayer.addTo(map);

    // Add layer control to switch between layers
    L.control.layers({
      'OpenStreetMap': openStreetMapLayer,
      'ESRI Satellite': esriSatelliteLayer
    }).addTo(map);

    // Cleanup function to remove the map on component unmount
    return () => {
      map.remove();
    };
  }, [center, zoom]);

  return <div ref={mapRef} style={{ height: '300px', width: '100%' }} />;
};

export default FarmView;