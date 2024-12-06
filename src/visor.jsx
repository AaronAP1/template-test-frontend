import React, { useEffect } from 'react';
import 'ol/ol.css';
import '/Users/xdxdxdxd/Desktop/template-test-frontend/style.css'; // Asegúrate de que este archivo exista y tenga el estilo necesario
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

function Visor() {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [-8246936.494308056, -1119428.8251098266], // Coordenadas de ejemplo
        zoom: 7,
        maxZoom: 50,
        minZoom: 5,
      }),
    });

    // Agrega aquí la lógica para cargar las capas vectoriales y de puntos
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
}

export default Visor;