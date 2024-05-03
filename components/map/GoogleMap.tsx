"use client";

import { useState, useEffect } from "react";

import {
  Map,
  Pin,
  Marker,
  useMap,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

import { data } from "@/data/dummyData";

function GoogleMap({
  setSelectedItem,
  setPlay,
}: {
  setSelectedItem: (item: any) => void;
  setPlay: (value: boolean) => void;
}) {
  const [localData, setLocalData] = useState(data);
  const [id, setId] = useState<string | number | null>(null);

  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(3);

  const map = useMap();
  // Zoom Map To Fit All Markers Locations

  useEffect(() => {
    let minLat = Infinity,
      maxLat = -Infinity;
    let minLng = Infinity,
      maxLng = -Infinity;

    localData.forEach((item) => {
      minLat = Math.min(minLat, item.location.lat);
      maxLat = Math.max(maxLat, item.location.lat);
      minLng = Math.min(minLng, item.location.lng);
      maxLng = Math.max(maxLng, item.location.lng);
    });

    const centerLat = (minLat + maxLat) / 3.2;
    const centerLng = (minLng + maxLng) / 2.3;
    setCenter({ lat: centerLat, lng: centerLng });
    setZoom(15);
  }, [localData]);

  const onMarkerClick = (itemId: number | string) => {
    if (id === itemId) {
      setSelectedItem(null);
      setId(null);
      map?.setZoom(15);
    } else {
      const foundItem = localData.find((item) => item.id === itemId);
      if (foundItem) {
        setSelectedItem(foundItem);
        setId(itemId);
        // Zoom to coordinate
        const zoomLevel = 15;
        if (map) {
          map.panTo({
            lat: foundItem.location.lat,
            lng: foundItem.location.lng,
          });
          map.setZoom(zoomLevel);
        }
      }
    }

    setPlay(true);
  };

  return (
    <div className="h-[85vh] w-full rounded-[6px] pr-8">
      {/* IMPORTANT: The map ID used in the Map component is for testing purposed ONLY. Do not use in production environment. You should generate your own map ID from Google console and replace mapId prop here. */}
      <Map
        defaultZoom={zoom}
        defaultCenter={center}
        gestureHandling="greedy"
        streetViewControl={false}
        fullscreenControl={false}
        mapTypeControl={false}
        mapId="DEMO_MAP_ID"
        style={{
          borderRadius: "6px",
          border: "1.33px solid #E0E0E0",
        }}
      >
        {localData.map((item) => {
          return (
            <AdvancedMarker
              key={item.id}
              position={{ lat: item.location.lat, lng: item.location.lng }}
              title={`Participant's Location`}
              onClick={() => onMarkerClick(item.id)}
            >
              <span
                className={`inline-block h-[20px] w-[20px] rounded-full border-2 border-white ${
                  item.isCustomerBrand ? "bg-[#d02626]" : "bg-[#8d83d8]"
                } `}
              ></span>
            </AdvancedMarker>
          );
        })}
      </Map>
    </div>
  );
}

export default GoogleMap;
