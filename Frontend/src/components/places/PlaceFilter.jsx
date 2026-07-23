import { Regions } from "../../utils/constants";

const PlaceFilter = ({ Regions }) => {
  return (
    <div className="w-full md:w-1/4 space-y-6">
      <h2 className="text-2xl font-semibold">Filters</h2>

      {/* Regions */}
      <div className="bg-white p-4 rounded-md shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium">Regions</span>

          <button
            onClick={() => setSelectedRegion("All")}
            className="text-[#f74362] text-sm hover:underline"
          >
            Clear
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedRegion("All")}
            className={`px-3 py-1 rounded-full border text-sm transition ${
              selectedRegion === "All"
                ? "bg-[#f74362] text-white border-[#f74362]"
                : "border-gray-300 text-[#f74362] hover:bg-gray-100"
            }`}
          >
            All
          </button>

          {Regions.map((region, i) => (
            <button
              key={i}
              onClick={() => setSelectedRegion(Regions)}
              className={`px-3 py-1 rounded-full border text-sm transition ${
                selectedRegion === region
                  ? "bg-[#f74362] text-white border-[#f74362]"
                  : "border-gray-300 text-[#f74362] hover:bg-gray-100"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceFilter;