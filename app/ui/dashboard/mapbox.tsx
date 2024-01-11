'use client';
import React from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import type { CircleLayer, SymbolLayer } from 'react-map-gl';
import type { FeatureCollection, Point } from 'geojson';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = ({
  airQuality,
  lat,
  lon,
}: {
  airQuality: any;
  lat: number;
  lon: number;
}) => {
  const offset = 0.0011;
  const geojson: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lon, lat],
        },
        properties: {
          id: 'co-point',
          propertyType: 'co',
          value: airQuality.co,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lon + offset, lat + offset],
        },
        properties: {
          id: 'no2-point',
          propertyType: 'no2',
          value: airQuality.no2,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lon - offset, lat - offset],
        },
        properties: {
          id: 'o3-point',
          propertyType: 'o3',
          value: airQuality.o3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lon + offset, lat - offset],
        },
        properties: {
          id: 'so2-point',
          propertyType: 'so2',
          value: airQuality.so2,
        },
      },
    ],
  };
  const layerStyle: CircleLayer = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['get', 'value'],
        0,
        50, // Minimum radius
        100,
        80,
        250,
        100, // Maximum radius
      ],
      'circle-color': [
        'interpolate',
        ['linear'],
        ['get', 'value'],
        0,
        'rgba(0, 124, 191, 0.4)', // Color at value 0
        50,
        'rgba(0, 255, 0, 0.4)', // Color at value 50
        100,
        'rgba(255, 0, 0, 0.4)', // Color at value 100
      ],
    },
  };
  const textLayer: SymbolLayer = {
    id: 'text',
    type: 'symbol',
    layout: {
      'text-field': [
        'concat',
        ['get', 'propertyType'],
        ' ',
        ['to-string', ['get', 'value']],
      ],
      'text-size': 12,
      'text-offset': [0, 0.5], // Adjust the offset to position the label above the circle
      'text-anchor': 'bottom', // Align text to the bottom of the label
    },
    paint: {
      'text-color': '#000', // Text color
    },
  };
  return (
    <Map
      mapboxAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
      initialViewState={{
        longitude: lon,
        latitude: lat,
        zoom: 14,
      }}
      style={{ width: 800, height: 400 }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
        <Layer {...textLayer} />
      </Source>
    </Map>
  );
};

export default Mapbox;
