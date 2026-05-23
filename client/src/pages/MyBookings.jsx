import { useEffect, useState } from "react";
import axios from "axios";

function MyBookings() {

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/bookings"
        );

      setBookings(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold text-blue-500 mb-10">
        My Bookings 📋
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {bookings.map((booking) => (

          <div
            key={booking._id}
            className="bg-gray-900 p-6 rounded-xl"
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
              Date: {
  new Date(
    booking.date
  ).toLocaleDateString()
}
            </p>

            <p className="mt-4 text-green-400">
              Status:
              {" "}
              {booking.status}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyBookings;