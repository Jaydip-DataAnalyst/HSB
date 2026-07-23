import React from "react";
import { useNavigate } from "react-router-dom";
import { places } from "../utils/constants";

const Recommended = () => {
  const navigate = useNavigate();

  const handleNavigate = (place) => {
    navigate(`/places/${place.id}`);
  };

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Recommended Places
          </h2>

          <button
            onClick={() => navigate("/places")}
            className="text-red-500 hover:text-red-600 font-semibold transition"
          >
            See All
          </button>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {places.slice(0, 5).map((place) => (
            <div
              key={place.id}
              onClick={() => handleNavigate(place)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={place.img}
                  alt={place.title}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Rating */}
              <div className="bg-black text-white flex items-center justify-between px-3 py-2 text-sm">
                <span>⭐ {place.rating}</span>
                <span>{place.votes} Votes</span>
              </div>

              {/* Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {place.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {place.genre}
                </p>

                {place.languages && place.languages.length > 0 && (
                  <p className="text-xs text-gray-400 mt-2">
                    {place.languages.join(", ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;