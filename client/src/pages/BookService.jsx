import { useParams } from "react-router-dom";
import { useState } from "react";
import { createBooking } from "../api/bookingApi";

function BookService() {

  const { serviceName } = useParams();

  const [formData, setFormData] = useState({
    address: "",
    city: "",
    date: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const data =
      await createBooking({
        service: serviceName,
        ...formData,
      });

    alert(data.message);

  } catch (error) {

    alert("Booking Failed");

  }

};

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-xl w-[450px]"
      >

        <h1 className="text-3xl text-white font-bold mb-6">
          Book {serviceName}
        </h1>

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <button className="w-full bg-blue-600 p-3 rounded text-white">
          Confirm Booking
        </button>

      </form>

    </div>
  );
}

export default BookService;