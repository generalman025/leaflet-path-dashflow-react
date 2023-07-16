import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style={{ width: '100%', height: 600 }}>
      <style>{`
        .leaflet-container {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <MapContainer center={[47.629729, 12.433587]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={[[47.627253, 12.434933],
            [47.628233, 12.434574],
            [47.629729, 12.433587],
            // [47.631779, 12.436349]]} pathOptions={{dashArray: "15 15", dashSpeed: 30}} />
            [47.631779, 12.436349]]} pathOptions={{dashArray: "15 15"}} />
        {/* <Hotline
          positions={[
            [47.627253, 12.434933, 1600],
            [47.628233, 12.434574, 1605],
            [47.629729, 12.433587, 1610],
            [47.631779, 12.436349, 1615],
          ]}
          weight={3}
          min={1600}
          max={1620}
          palette={{
            0.0: 'red',
            0.5: 'yellow',
            1.0: 'green',
          }}
        /> */}
      </MapContainer>
    </div>
  </React.StrictMode>,
);