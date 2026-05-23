import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  // CHECK LOGIN/SIGNUP PAGE
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (

    <nav className="bg-[#081229] text-white flex justify-between items-center px-5 py-5">

      <Link
        to="/"
        className="text-4xl font-bold text-blue-500"
      >
        RAPIFIX 🚀
      </Link>

      {/* HIDE NAV LINKS ON LOGIN/SIGNUP */}
      {!isAuthPage && (

        <div className="flex gap-8 text-2xl">

          <Link to="/">Home</Link>

          <Link to="/services">
            Services
          </Link>

          {token && (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link to="/my-bookings">
                My Bookings
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-500"
              >
                Logout
              </button>
            </>
          )}

          {!token && (
            <Link to="/login">
              Login
            </Link>
          )}

        </div>

      )}

    </nav>
  );
}

export default Navbar;