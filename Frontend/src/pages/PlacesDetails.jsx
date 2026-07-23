import React from "react";
import m1 from "../assets/m1.jpg";
import TicketTimings from "../components/places/TicketTimings";

const place = {
  id: 1,
  title: "Taj Mahal",
  genre: "Mughal Architecture • UNESCO World Heritage",
  rating: 4.9,
  votes: "2.8M",
  img: m1,
  promoted: true,
  format: ["Offline"],
  languages: ["English", "Hindi"],
};

const PlaceDetails = () => {
  return (
    <div
      className="relative min-h-screen text-white font-sans"
      style={{
        backgroundImage: `url(${place.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Attraction Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={place.img}
              alt={place.title}
              className="w-72 rounded-xl shadow-2xl"
            />
          </div>

          {/* Attraction Details */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Title */}
            <h1 className="text-5xl font-bold mb-5">{place.title}</h1>

            {/* Rating */}
            <div className="mb-5">
              <div className="inline-flex items-center bg-[#2d2d2d] rounded-lg px-5 py-3 gap-4">
                <span className="text-pink-500 text-lg font-bold">
                  ★ {place.rating}
                </span>

                <span className="text-gray-300">
                  {place.votes} Votes
                </span>

                <button className="ml-4 px-4 py-2 rounded-md bg-[#444] hover:bg-[#555] transition">
                  Rate Now
                </button>
              </div>
            </div>

            {/* Format & Language */}
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="bg-[#2d2d2d] px-4 py-2 rounded-md">
                {place.format.join(", ")}
              </span>

              <span className="bg-[#2d2d2d] px-4 py-2 rounded-md">
                {place.languages.join(", ")}
              </span>
            </div>

            {/* Genre */}
            <p className="text-lg text-gray-300 mb-6">
              {place.genre}
            </p>

            {/* Availability Status */}
            <div className="bg-white rounded-lg px-6 py-4 w-fit">
              <div className="flex flex-wrap items-center gap-6">
                <span className="flex items-center text-gray-700">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="font-semibold">Available</span>
                </span>

                <span className="flex items-center text-gray-700">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="font-semibold">Filling Fast</span>
                </span>

                <span className="flex items-center text-gray-700">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <span className="font-semibold">Almost Full</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Timings */}
        <div className="mt-12">
          <TicketTimings placeId={place.id} />
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;