import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  loginUser,
} from "../api/authApi";

function Login() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
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
          await loginUser(formData);

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(

          "user",

          JSON.stringify(
            data.user
          )

        );

        toast.success(
          data.message
        );

        navigate(-1);

      } catch (error) {

        console.log(error);

        toast.error(

          error.response?.data?.message ||

          "Login Failed"

        );

      }

  };

  return (

    <div className="bg-black min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-xl w-[400px] hover:scale-105 transition"
      >

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white outline-none"
        />

        <button
          className="w-full bg-blue-600 p-3 rounded text-white hover:bg-blue-700 transition"
        >
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