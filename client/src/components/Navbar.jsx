import {
  NavLink,
  useNavigate,
} from "react-router-dom";

function Navbar() {

  const navigate =
    useNavigate();

  const token =
    localStorage.getItem(
      "token"
    );

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");

  };

  const navLinkClass =
    ({ isActive }) =>

      isActive

        ? "text-blue-500 font-semibold"

        : "text-white hover:text-blue-400 transition";

  return (

    <nav className="bg-[#081028] px-6 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-blue-500">
        RAPIFIX 🚀
      </h1>

      <div className="flex gap-8 items-center text-lg">

        <NavLink
          to="/dashboard"
          className={navLinkClass}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/my-bookings"
          className={navLinkClass}
        >
          My Bookings
        </NavLink>

        {user?.role === "admin" && (

          <NavLink
            to="/admin-bookings"
            className={navLinkClass}
          >
            Admin
          </NavLink>

        )}

        <NavLink
          to="/profile"
          className={navLinkClass}
        >
          Profile
        </NavLink>

        {!token ? (

          <NavLink
            to="/login"
            className="bg-blue-600 px-5 py-2 rounded hover:bg-blue-700 transition text-white"
          >
            Login
          </NavLink>

        ) : (

          <button
            onClick={logout}
            className="bg-red-600 px-5 py-2 rounded hover:bg-red-700 transition text-white"
          >
            Logout
          </button>

        )}

      </div>

    </nav>

  );
}

export default Navbar;