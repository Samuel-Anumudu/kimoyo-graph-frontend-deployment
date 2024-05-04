"use client";

import { useState, useEffect, useRef } from "react";
import { UserData } from "@/data/dummyData";

import {
  Map,
  Pin,
  Marker,
  useMap,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

import { data } from "@/data/dummyData";

type FilterDataType = {
  question: { text: string; id: string | number };
  consumerDemographics: { [key: string]: string[] };
};

function GoogleMap({
  filterData,
  setSelectedItem,
  setPlay,
}: {
  filterData: FilterDataType;
  setSelectedItem: (item: any) => void;
  setPlay: (value: boolean) => void;
}) {
  const [localDataCopy, setLocalDataCopy] = useState([...data]);
  const [id, setId] = useState<string | number | null>(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(3);
  const filterDataRef = useRef(filterData);

  // This UseEffect Is Where the Filter Logic Lives
  useEffect(() => {
    for (const key of Object.keys(filterData)) {
      if (
        JSON.stringify(filterData[key as keyof FilterDataType]) !==
        JSON.stringify(filterDataRef.current[key as keyof FilterDataType])
      ) {
        if (key === "question") {
          const updatedLocalData = data.filter(
            (item) => item.insights.question === filterData[key].text
          );
          setLocalDataCopy(updatedLocalData);
        } else if (key === "consumerDemographics") {
          // TODO: Please do the same for demographics filter
          return;
        }
      }
    }
    filterDataRef.current = filterData;
  }, [filterData, data]);

  const map = useMap();
  // Zoom Map To Fit All Markers Locations
  useEffect(() => {
    let minLat = Infinity,
      maxLat = -Infinity;
    let minLng = Infinity,
      maxLng = -Infinity;

    data.forEach((item) => {
      minLat = Math.min(minLat, item.location.lat);
      maxLat = Math.max(maxLat, item.location.lat);
      minLng = Math.min(minLng, item.location.lng);
      maxLng = Math.max(maxLng, item.location.lng);
    });

    const centerLat = (minLat + maxLat) / 3.2;
    const centerLng = (minLng + maxLng) / 2.3;
    setCenter({ lat: centerLat, lng: centerLng });
    setZoom(15);
  }, [data]);

  const onMarkerClick = (itemId: number | string) => {
    if (id === itemId) {
      setSelectedItem(null);
      setId(null);
      map?.setZoom(15);
    } else {
      const foundItem = localDataCopy.find((item) => item.id === itemId);
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
        {localDataCopy.map((item) => {
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
