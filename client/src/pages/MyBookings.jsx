import {
  useEffect,
  useState,
} from "react";

import {
  getMyBookings,
} from "../api/bookingApi";

function MyBookings() {

  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings =
    async () => {

      try {

        const data =
          await getMyBookings();

        setBookings(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

  };

  if (loading) {

    return (

      <div className="bg-black min-h-screen flex justify-center items-center text-white text-2xl">

        Loading...

      </div>

    );

  }

  return (

    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold text-blue-500 mb-10">
        My Bookings 📋
      </h1>

      {/* EMPTY BOOKINGS */}

      {bookings.length === 0 && (

        <p className="text-gray-400 text-xl">
          No bookings yet 🚀
        </p>

      )}

      <div className="grid md:grid-cols-3 gap-6">

        {bookings

          .sort(
            (a, b) =>
              new Date(b.date) -
              new Date(a.date)
          )

          .map((booking) => {

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
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
            >

              <h2 className="text-2xl mb-4">
                {booking.service}
              </h2>

              <p>
                Address:
                {" "}
                {booking.address}
              </p>

              <p>
                City:
                {" "}
                {booking.city}
              </p>

              <p>
                Date:
                {" "}
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

                Status:
                {" "}

                {
                  isExpired &&
                  booking.status !==
                    "Completed"

                    ? "Expired"

                    : booking.status
                }

              </p>

            </div>

          );

        })}

      </div>

    </div>

  );
}

export default MyBookings;