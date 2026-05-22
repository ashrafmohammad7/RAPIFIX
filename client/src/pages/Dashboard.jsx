import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold text-blue-500">
          RAPIFIX Dashboard 🚀
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-5 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <div className="mt-10 bg-gray-900 p-6 rounded-xl w-[400px]">

        <h2 className="text-2xl mb-4">
          Welcome {user?.name}
        </h2>

        <p>Email: {user?.email}</p>

        <p>Phone: {user?.phone}</p>

      </div>

    </div>
  );
}

export default Dashboard;