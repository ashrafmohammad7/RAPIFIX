import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../api/authApi";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
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

      const data = await loginUser(formData);

      // SAVE TOKEN
      localStorage.setItem("token", data.token);

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert(data.message);

      navigate(-1);

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login failed"
      );

    }

  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-xl w-[400px]"
      >

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
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
          Login
        </button>

        <p className="text-gray-400 mt-4 text-center">

          Don't have account?

          <Link
            to="/signup"
            className="text-blue-500 ml-2"
          >
            Signup
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;