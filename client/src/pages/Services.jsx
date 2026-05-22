import { useNavigate } from "react-router-dom";

function Services() {

  const navigate = useNavigate();

  const services = [
    "AC Repair",
    "Washing Machine",
    "Refrigerator",
    "RO Service",
    "Electrician",
    "TV Repair",
  ];

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold text-blue-500 mb-10">
        RAPIFIX Services 🔧
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {services.map((service, index) => (

          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg"
          >

            <h2 className="text-2xl mb-6">
              {service}
            </h2>

            <button
              onClick={() =>
                navigate(`/book/${service}`)
              }
              className="bg-blue-600 px-5 py-2 rounded"
            >
              Book Now
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Services;