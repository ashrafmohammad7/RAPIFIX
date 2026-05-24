import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createBooking } from "../api/bookingApi";

function BookService() {

  const { serviceName } =
    useParams();

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      address: "",
      city: "",
      date: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const data =
          await createBooking({

            service:
              serviceName,

            ...formData,

          });

        alert(data.message);

        navigate(
          "/my-bookings"
        );

      } catch (error) {

        alert(
          "Booking Failed"
        );

      }

  };

  return (

    <div className="bg-black min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-xl w-[450px] hover:scale-105 transition"
      >

        <h1 className="text-3xl text-white font-bold mb-6">
          Book {serviceName}
        </h1>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white outline-none"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white outline-none"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={
            new Date()
              .toISOString()
              .split("T")[0]
          }
          required
          className="w-full mb-6 p-4 rounded bg-[#111827] text-white outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded text-white font-semibold"
        >
          Confirm Booking
        </button>

      </form>

    </div>

  );
}

export default BookService;