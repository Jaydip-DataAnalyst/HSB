import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContinueBooking from "./ContinueBooking";

// Prices based on ticket category
const categoryPrices = {
  General: {
    Adult: 250,
    Child: 150,
    "Senior Citizen": 200,
  },
  Premium: {
    Adult: 500,
    Child: 300,
    "Senior Citizen": 400,
  },
  VIP: {
    Adult: 1000,
    Child: 700,
    "Senior Citizen": 850,
  },
};

const SelectTicket = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Selected category from previous page
  const selectedCategory = state?.category || "General";

  // Ticket types with dynamic pricing
  const ticketTypes = [
    {
      id: 1,
      name: "Adult",
      age: "18+ Years",
      price: categoryPrices[selectedCategory].Adult,
    },
    {
      id: 2,
      name: "Child",
      age: "5 - 17 Years",
      price: categoryPrices[selectedCategory].Child,
    },
    {
      id: 3,
      name: "Senior Citizen",
      age: "60+ Years",
      price: categoryPrices[selectedCategory]["Senior Citizen"],
    },
  ];

  const [selectedTickets, setSelectedTickets] = useState({
    Adult: 0,
    Child: 0,
    "Senior Citizen": 0,
  });

  // Total Tickets
  const totalTickets = Object.values(selectedTickets).reduce(
    (sum, qty) => sum + qty,
    0
  );

  // Total Amount
  const totalAmount = ticketTypes.reduce((sum, ticket) => {
    return sum + ticket.price * selectedTickets[ticket.name];
  }, 0);

  // Increase Ticket
  const increase = (name) => {
    if (totalTickets >= 10) {
      alert("Maximum 10 tickets allowed per booking.");
      return;
    }

    setSelectedTickets((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  // Decrease Ticket
  const decrease = (name) => {
    if (selectedTickets[name] === 0) return;

    setSelectedTickets((prev) => ({
      ...prev,
      [name]: prev[name] - 1,
    }));
  };

  // Continue Booking
  const handleContinue = () => {
    if (totalTickets === 0) {
      alert("Please select at least one ticket.");
      return;
    }

    navigate("/booking/payment", {
      state: {
        ...state,
        tickets: selectedTickets,
        totalTickets,
        totalAmount,
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">

      {/* Header */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h1 className="text-3xl font-bold mb-5">
          Select Tickets
        </h1>

        <div className="grid md:grid-cols-3 gap-4 text-gray-700">
          <p>
            <strong>Date:</strong> {state?.date}
          </p>

          <p>
            <strong>Time:</strong> {state?.time}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            <span className="text-blue-600 font-semibold">
              {selectedCategory}
            </span>
          </p>
        </div>

        <p className="mt-4 text-red-500 font-medium">
          Maximum 10 tickets can be booked at a time.
        </p>
      </div>

      {/* Ticket Cards */}
      <div className="space-y-5">
        {ticketTypes.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white shadow rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">
                {ticket.name}
              </h2>

              <p className="text-gray-500">
                {ticket.age}
              </p>

              <p className="text-green-600 font-bold text-lg mt-2">
                ₹{ticket.price}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => decrease(ticket.name)}
                className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white text-xl"
              >
                −
              </button>

              <span className="text-xl font-bold w-8 text-center">
                {selectedTickets[ticket.name]}
              </span>

              <button
                onClick={() => increase(ticket.name)}
                className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white text-xl"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Summary */}
      <div className="bg-white shadow-lg rounded-xl mt-10 p-6">
        <h2 className="text-2xl font-bold mb-5">
          Booking Summary
        </h2>

        {ticketTypes.map((ticket) =>
          selectedTickets[ticket.name] > 0 ? (
            <div
              key={ticket.id}
              className="flex justify-between mb-2"
            >
              <span>
                {ticket.name} × {selectedTickets[ticket.name]}
              </span>

              <span>
                ₹
                {ticket.price *
                  selectedTickets[ticket.name]}
              </span>
            </div>
          ) : null
        )}

        <hr className="my-5" />

        <div className="flex justify-between text-lg font-semibold">
          <span>Total Tickets</span>

          <span>{totalTickets} / 10</span>
        </div>

        <div className="flex justify-between text-2xl font-bold mt-4">
          <span>Total Amount</span>

          <span className="text-green-600">
            ₹{totalAmount}
          </span>
        </div>

        <button
          onClick={handleContinue}
          disabled={totalTickets === 0}
          className={`w-full mt-8 py-4 rounded-xl text-lg font-semibold transition ${
            totalTickets === 0
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-black hover:bg-gray-900 text-white"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectTicket;