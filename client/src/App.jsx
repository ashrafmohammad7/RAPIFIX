import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookService from "./pages/BookService";
import MyBookings from "./pages/MyBookings";
import AdminBookings from "./pages/AdminBookings";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/book/:serviceName"
          element={<BookService />}
        />

        <Route
          path="/my-bookings"
          element={<MyBookings />}
        />

        <Route
          path="/admin-bookings"
          element={<AdminBookings />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;