import React from "react";
import dayjs from "dayjs";
import { MdChair } from "react-icons/md";
import { ordersData } from "../../utils/constants";

const BookingHistory = () => {
  return (
    <div className="px-6 py-6 rounded-md">
      <h3 className="text-xl font-semibold mb-6">Your Bookings</h3>

      {ordersData.map((order) => (
        <React.Fragment key={order.id}>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
            <div className="p-5">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Poster */}
                <img
                  src={order.poster}
                  alt={order.title}
                  loading="lazy"
                  className="w-[120px] h-40 object-cover rounded-md"
                />

                {/* Divider */}
                <div className="hidden md:block h-40 border-l border-dashed border-gray-300"></div>

                {/* Details */}
                <div className="flex flex-col md:flex-row justify-between w-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">
                      {order.title}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      {Array.isArray(order.format)
                        ? order.format.join(" | ")
                        : order.format}
                    </p>

                    <p className="text-sm font-medium text-gray-700 mt-3">
                      {order.datetime}
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                      Quantity: {order.quantity}
                    </p>

                    <p className="flex items-center text-gray-700 font-medium mt-2">
                      <MdChair className="mr-2" size={20} />
                      {order.seats}
                    </p>
                  </div>

                  {/* Ticket Badge */}
                  <div className="mt-4 md:mt-0">
                    <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                      M-Ticket
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-gray-200 px-5 py-4 text-right">
              <p className="text-sm text-gray-500">
                Ticket: ₹{order.ticket.toFixed(2)} + Convenience Fees: ₹
                {order.fee.toFixed(2)}
              </p>

              <p className="text-2xl font-bold text-gray-800 mt-1">
                ₹{order.total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-white rounded-lg shadow-sm p-5 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 mb-8">
            <div>
              <p className="font-semibold text-gray-800">
                Booking Date & Time
              </p>
              <p>
                {dayjs(order.bookingTime).format("DD MMM YYYY, h:mm A")}
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                Payment Method
              </p>
              <p>{order.paymentMethod.toUpperCase()}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                Booking ID
              </p>
              <p>{order.id}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BookingHistory;