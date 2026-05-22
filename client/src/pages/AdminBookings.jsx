import { useEffect, useState } from "react";

import axios from "axios";

function AdminBookings() {

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings =
    async () => {

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

    <div className="bg-black min-h-screen p-10">

      <h1 className="text-5xl font-bold text-blue-500 mb-10">
        Admin Bookings 📋
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {bookings.map((booking) => (

          <div
            key={booking._id}
            className="bg-gray-900 p-6 rounded-xl text-white"
          >

            <h2 className="text-2xl mb-3">
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
              {booking.date}
            </p>

            <p className="text-green-400 mt-4">
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

export default AdminBookings;