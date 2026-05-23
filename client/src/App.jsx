import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Services from "./pages/Services";
import BookService from "./pages/BookService";
import MyBookings from "./pages/MyBookings";
import Technician from "./pages/Technician";
import AdminBookings from "./pages/AdminBookings";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
<Route path="/services" element={<Services />} />

<Route
  path="/book/:serviceName"
  element={
    <ProtectedRoute>
      <BookService />
    </ProtectedRoute>
  }
/>
<Route
  path="/my-bookings"
  element={<MyBookings />}
/>
<Route
  path="/technician"
  element={<Technician />}
/>
<Route
  path="/admin-bookings"
  element={<AdminBookings />}
/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
