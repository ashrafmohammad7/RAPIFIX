import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

function AdminBookings() {

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings =
    async () => {

      const response =
        await axios.get(
          "http://localhost:5000/api/bookings/admin"
        );

      setBookings(response.data);

  };

  const updateStatus =
    async (id, status) => {

      await axios.put(

        `http://localhost:5000/api/bookings/update/${id}`,

        { status }

      );

      fetchBookings();

  };

  return (

    <div className="bg-black min-h-screen p-10 text-white">

      <h1 className="text-5xl font-bold text-blue-500 mb-10">
        Admin Bookings 📋
      </h1>

      {/* EMPTY BOOKINGS MESSAGE */}

      {bookings.length === 0 && (

        <p className="text-gray-400 text-xl">
          No bookings found
        </p>

      )}

      <div className="grid md:grid-cols-3 gap-6">

        {bookings.map((booking) => {

          const bookingDate =
            new Date(booking.date);

          const today =
            new Date();

          today.setHours(
            0,
            0,
            0,
            0
          );

          bookingDate.setHours(
            0,
            0,
            0,
            0
          );

          const isExpired =
            bookingDate < today;

          return (

            <div
              key={booking._id}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300"
            >

              <h2 className="text-2xl mb-4">
                {booking.service}
              </h2>

              <p>
                {booking.address}
              </p>

              <p>
                {booking.city}
              </p>

              <p>
                {
                  new Date(
                    booking.date
                  ).toLocaleDateString()
                }
              </p>

              <p
                className={`mt-4 font-semibold ${
                  isExpired &&
                  booking.status !==
                    "Completed"

                    ? "text-red-500"

                    : booking.status ===
                      "Pending"

                    ? "text-yellow-400"

                    : booking.status ===
                      "Accepted"

                    ? "text-blue-400"

                    : booking.status ===
                      "Completed"

                    ? "text-green-400"

                    : "text-gray-400"
                }`}
              >

                Status:{" "}

                {
                  isExpired &&
                  booking.status !==
                    "Completed"

                    ? "Expired"

                    : booking.status
                }

              </p>

              <div className="flex gap-3 mt-4">

                {!isExpired &&
                  booking.status ===
                    "Pending" && (

                  <button
                    onClick={() =>
                      updateStatus(
                        booking._id,
                        "Accepted"
                      )
                    }
                    className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded"
                  >
                    Accept
                  </button>

                )}

                {!isExpired &&
                  booking.status !==
                    "Completed" && (

                  <button
                    onClick={() =>
                      updateStatus(
                        booking._id,
                        "Completed"
                      )
                    }
                    className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded"
                  >
                    Complete
                  </button>

                )}

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );
}

export default AdminBookings;