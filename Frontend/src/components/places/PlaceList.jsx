import React, { useState } from "react";
import { Regions, allPlaces } from "../../utils/constants";
import PlaceCard from "../places/PlaceCard";

const PlaceList = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredPlaces =
    selectedRegion === "All"
      ? allPlaces
      : allPlaces.filter(
          (place) =>
            place.region.toLowerCase() === selectedRegion.toLowerCase()
        );

  return (
    <div className="w-full md:w-3/4 p-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setSelectedRegion("All")}
          className={`px-4 py-2 rounded-full border transition ${
            selectedRegion === "All"
              ? "bg-[#f74362] text-white border-[#f74362]"
              : "bg-white text-[#f74362] border-gray-300 hover:bg-gray-100"
          }`}
        >
          All
        </button>

        {Regions.map((region, index) => (
          <button
            key={index}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedRegion === region
                ? "bg-[#f74362] text-white border-[#f74362]"
                : "bg-white text-[#f74362] border-gray-300 hover:bg-gray-100"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 py-10 px-10">
        {filteredPlaces.length > 2 ? (
          filteredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))
        ) : (
          <div className="text-gray-500 text-lg font-medium">
            No places found.
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceList;