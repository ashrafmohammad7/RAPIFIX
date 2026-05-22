import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../api/authApi";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
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

      const data = await registerUser(formData);

      alert(data.message);

      navigate("/login");

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-xl w-[400px]"
      >

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
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
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />

        <button className="w-full bg-blue-600 p-3 rounded text-white hover:bg-blue-700">
          Signup
        </button>

        <p className="text-gray-400 mt-4 text-center">

          Already have account?

          <Link
            to="/login"
            className="text-blue-500 ml-2"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Signup;