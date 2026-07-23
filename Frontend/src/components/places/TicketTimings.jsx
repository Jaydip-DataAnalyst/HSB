import React, { useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { timeslots } from "../../utils/constants";

const TicketTimings = ({ placeId }) => {
  const navigate = useNavigate();

  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);

  const formattedDate = selectedDate.format("DD-MM-YYYY");

  const next7days = Array.from(
    { length: 7 },
    (_, i) => today.add(i, "day")
  );

  const handleBooking = (category, time) => {
    navigate("/booking", {
      state: {
        placeId,
        date: formattedDate,
        category,
        time,
      },
    });
  };

  return (
    <>
      <hr className="my-2 border-gray-300" />

      {/* Date Selection */}
      <div className="flex items-center gap-3 overflow-x-auto py-4 px-2">
        {next7days.map((date, index) => {
          const isSelected = selectedDate.isSame(date, "day");

          return (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`cursor-pointer flex flex-col items-center px-4 py-3 rounded-lg border transition min-w-[70px]
                ${
                  isSelected
                    ? "bg-white text-black border-black"
                    : "bg-black border-red-300 hover:bg-gray-100"
                }`}
            >
              <span className="text-lg font-bold">
                {date.format("D")}
              </span>

              <span className="text-sm">
                {date.format("ddd")}
              </span>

              <span className="text-xs">
                {date.format("MMM").toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Ticket Categories */}
      <div className="space-y-8 px-4 py-4">

        {timeslots.length === 0 && (
          <div className="text-center text-gray-500">
            No tickets available.
          </div>
        )}

        {timeslots.map((category, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-sm bg-white"
          >
            {/* Category */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {category.category}
              </h2>

              <span className="text-sm text-gray-500">
                {formattedDate}
              </span>
            </div>

            {/* Time Slots */}
            <div className="flex flex-wrap gap-4">
              {category.timings.map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleBooking(category.category, slot.time)
                  }
                  className="border border-green-500 rounded-xl px-8 py-3 hover:bg-green-50 transition cursor-pointer"
                >
                  <p className="text-green-700 font-semibold">
                    {slot.time}
                  </p>

                  <p className="text-xs text-gray-700">
                    {slot.ticketsAvailable} Tickets Left
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TicketTimings;