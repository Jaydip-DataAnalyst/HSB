import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContinueBooking = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Redirect if page is opened directly
  useEffect(() => {
    if (!state) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  // -----------------------------
  // 2 Minute Countdown Timer
  // -----------------------------
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (!state) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          alert("Your booking session has expired.");

          // Redirect back to ticket page
          navigate("/ticket", {
            replace: true,
          });

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, state]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  // -----------------------------
  // Payment
  // -----------------------------
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const handlePayment = () => {
    alert("Payment Successful!");

    navigate("/payment-success", {
      state,
    });
  };

  if (!state) return null;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* ===================== */}
        {/* Left Section */}
        {/* ===================== */}

        <div className="lg:col-span-2 space-y-6">

          {/* Booking Details */}

          <div className="bg-white rounded-xl shadow-md p-6">

            <h1 className="text-3xl font-bold mb-6">
              Booking Details
            </h1>

            <div className="grid md:grid-cols-3 gap-5">

              <div>
                <p className="text-gray-500">Visit Date</p>
                <h2 className="font-semibold text-lg">
                  {state.date}
                </h2>
              </div>

              <div>
                <p className="text-gray-500">Time Slot</p>
                <h2 className="font-semibold text-lg">
                  {state.time}
                </h2>
              </div>

              <div>
                <p className="text-gray-500">Category</p>
                <h2 className="font-semibold text-lg text-blue-600">
                  {state.category}
                </h2>
              </div>

            </div>

          </div>

          {/* Selected Tickets */}

          <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">
              Selected Tickets
            </h2>

            {Object.entries(state.tickets).map(([name, qty]) =>
              qty > 0 ? (
                <div
                  key={name}
                  className="flex justify-between border-b py-3"
                >
                  <span className="font-medium">
                    {name}
                  </span>

                  <span>
                    {qty}
                  </span>
                </div>
              ) : null
            )}

          </div>

          {/* Payment */}

          <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">
              Payment Options
            </h2>

            <div className="space-y-4">

              <label className="flex items-center border rounded-lg p-4 cursor-pointer hover:bg-gray-50">

                <input
                  type="radio"
                  value="UPI"
                  checked={paymentMethod === "UPI"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="mr-3"
                />

                <span className="font-medium">
                  UPI (Google Pay / PhonePe / Paytm)
                </span>

              </label>

              <label className="flex items-center border rounded-lg p-4 cursor-pointer hover:bg-gray-50">

                <input
                  type="radio"
                  value="Credit Card"
                  checked={paymentMethod === "Credit Card"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="mr-3"
                />

                <span className="font-medium">
                  Credit Card
                </span>

              </label>

              <label className="flex items-center border rounded-lg p-4 cursor-pointer hover:bg-gray-50">

                <input
                  type="radio"
                  value="Debit Card"
                  checked={paymentMethod === "Debit Card"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="mr-3"
                />

                <span className="font-medium">
                  Debit Card
                </span>

              </label>

              <label className="flex items-center border rounded-lg p-4 cursor-pointer hover:bg-gray-50">

                <input
                  type="radio"
                  value="Net Banking"
                  checked={paymentMethod === "Net Banking"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="mr-3"
                />

                <span className="font-medium">
                  Net Banking
                </span>

              </label>

              <label className="flex items-center border rounded-lg p-4 cursor-pointer hover:bg-gray-50">

                <input
                  type="radio"
                  value="Wallet"
                  checked={paymentMethod === "Wallet"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                  className="mr-3"
                />

                <span className="font-medium">
                  Wallet
                </span>

              </label>

            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-semibold"
            >
              Pay ₹{state.totalAmount}
            </button>

          </div>

        </div>

        {/* ===================== */}
        {/* Right Section */}
        {/* ===================== */}

        <div>

          <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">

            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Date</span>
                <span>{state.date}</span>
              </div>

              <div className="flex justify-between">
                <span>Time</span>
                <span>{state.time}</span>
              </div>

              <div className="flex justify-between">
                <span>Category</span>
                <span>{state.category}</span>
              </div>

              <div className="flex justify-between">
                <span>Total Tickets</span>
                <span>{state.totalTickets}</span>
              </div>

            </div>

            <hr className="my-5" />

            <div className="flex justify-between text-xl font-bold">

              <span>Total Amount</span>

              <span className="text-green-600">
                ₹{state.totalAmount}
              </span>

            </div>

            {/* Timer */}

            <div className="mt-8 bg-red-50 border border-red-300 rounded-xl p-5 text-center">

              <h3 className="text-red-600 font-semibold">
                Seats Reserved
              </h3>

              <div className="text-5xl font-bold text-red-600 mt-3">
                {minutes}:{seconds}
              </div>

              <p className="text-sm text-gray-600 mt-3">
                Complete your payment before the timer expires.
              </p>

            </div>

            <div className="mt-6 text-sm text-gray-500">

              ✔ Secure Payment

              <br />

              ✔ Instant Confirmation

              <br />

              ✔ Non-transferable Ticket

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ContinueBooking;