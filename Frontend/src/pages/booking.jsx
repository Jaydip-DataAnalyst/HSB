import React from "react";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const { state } = useLocation();

  const tickets = state?.tickets || {};
  const totalTickets = state?.totalTickets || 0;
  const subtotal = state?.totalAmount || 0;

  const gst = Math.round(subtotal * 0.18);
  const convenienceFee = 30;
  const grandTotal = subtotal + gst + convenienceFee;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Left Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-8">

          <h1 className="text-3xl font-bold mb-8">
            Booking Details
          </h1>

          {/* Place Details */}
          <div className="border rounded-xl p-5 mb-6">

            <h2 className="text-xl font-semibold mb-4">
              Visit Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <p>
                <span className="font-semibold">Place :</span>{" "}
                {state?.placeName || "Taj Mahal"}
              </p>

              <p>
                <span className="font-semibold">Category :</span>{" "}
                {state?.category}
              </p>

              <p>
                <span className="font-semibold">Date :</span>{" "}
                {state?.date}
              </p>

              <p>
                <span className="font-semibold">Time :</span>{" "}
                {state?.time}
              </p>

            </div>

          </div>

          {/* Visitor Details */}

          <div className="border rounded-xl p-5">

            <h2 className="text-xl font-semibold mb-5">
              Visitor Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                placeholder="Full Name"
                className="border rounded-lg p-3"
              />

              <input
                placeholder="Mobile Number"
                className="border rounded-lg p-3"
              />

              <input
                placeholder="Email Address"
                className="border rounded-lg p-3"
              />

              <input
                placeholder="State"
                className="border rounded-lg p-3"
              />

              <input
                placeholder="City"
                className="border rounded-lg p-3"
              />

              <input
                placeholder="PIN Code"
                className="border rounded-lg p-3"
              />

            </div>

          </div>

        </div>

        {/* Right Section */}

        <div>

          <div className="bg-white rounded-xl shadow sticky top-6 p-6">

            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>

            <div className="space-y-3">

              {Object.entries(tickets).map(([type, qty]) =>
                qty > 0 ? (
                  <div
                    key={type}
                    className="flex justify-between"
                  >
                    <span>
                      {type} × {qty}
                    </span>

                    <span>
                      ₹
                      {type === "Adult"
                        ? qty * (subtotal / totalTickets)
                        : ""}
                    </span>
                  </div>
                ) : null
              )}

            </div>

            <hr className="my-5" />

            <div className="flex justify-between mb-2">

              <span>Tickets</span>

              <span>{totalTickets}</span>

            </div>

            <div className="flex justify-between mb-2">

              <span>Subtotal</span>

              <span>₹{subtotal}</span>

            </div>

            <div className="flex justify-between mb-2">

              <span>GST (18%)</span>

              <span>₹{gst}</span>

            </div>

            <div className="flex justify-between mb-2">

              <span>Convenience Fee</span>

              <span>₹{convenienceFee}</span>

            </div>

            <hr className="my-5" />

            <div className="flex justify-between text-xl font-bold">

              <span>Total</span>

              <span className="text-green-600">
                ₹{grandTotal}
              </span>

            </div>

            <button
              className="w-full mt-8 bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-gray-900"
            >
              Proceed to Payment
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Booking;