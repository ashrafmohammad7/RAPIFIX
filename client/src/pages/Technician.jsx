import { useState } from "react";
import {
  registerTechnician
} from "../api/technicianApi";

function Technician() {

  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      skill: "",
      experience: "",
      city: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const data =
      await registerTechnician(
        formData
      );

    alert(data.message);

  } catch (error) {

    alert("Registration Failed");

  }

};

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-xl w-[450px]"
      >

        <h1 className="text-4xl text-blue-500 font-bold mb-6 text-center">
          Become Technician 🔧
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="skill"
          placeholder="Skill (AC, TV, RO...)"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded bg-gray-800 text-white"
        />

        <button className="w-full bg-blue-600 p-3 rounded text-white">
          Register
        </button>

      </form>

    </div>
  );
}

export default Technician;