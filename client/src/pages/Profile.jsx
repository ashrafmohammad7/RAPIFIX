function Profile() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  return (

    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold text-blue-500 mb-10">
        My Profile 👤
      </h1>

      <div className="bg-gray-900 p-8 rounded-xl w-[450px] hover:scale-105 transition duration-300">

        <h2 className="text-3xl mb-6">
          {user?.name}
        </h2>

        <p className="mb-4">
          Email:
          {" "}
          {user?.email}
        </p>

        <p>
          Phone:
          {" "}
          {user?.phone}
        </p>

      </div>

    </div>

  );
}

export default Profile;