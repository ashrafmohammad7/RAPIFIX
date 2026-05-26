import {
  Link,
} from "react-router-dom";

function Home() {

  const services = [

    "AC Repair",
    "Washing Machine",
    "Refrigerator",
    "Microwave",
    "TV Repair",
    "Laptop Repair",

  ];

  return (

    <div className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}

      <div className="flex flex-col justify-center items-center text-center py-40 px-6">

        <h1 className="text-7xl font-bold text-blue-500 mb-8">

          RAPIFIX 🚀

        </h1>

        <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed">

          Fast, reliable and professional
          doorstep appliance repair services.

        </p>

        <div className="flex gap-6 mt-10">

          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 px-8 py-4 rounded-xl text-xl"
          >
            Get Started
          </Link>

          <Link
            to="/signup"
            className="border border-blue-500 hover:bg-blue-500 hover:scale-105 transition duration-300 px-8 py-4 rounded-xl text-xl"
          >
            Join Now
          </Link>

        </div>

      </div>

      {/* SERVICES */}

      <div className="px-10 py-20">

        <h2 className="text-5xl font-bold text-center mb-16 text-blue-500">

          Our Services

        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service) => (

            <div
              key={service}
              className="bg-gray-900 p-10 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300"
            >

              <h3 className="text-3xl font-semibold mb-6">
                {service}
              </h3>

              <p className="text-gray-400 mb-8">

                Professional and affordable
                repair services by experts.

              </p>

              <Link
                to={`/book/${service}`}
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 px-6 py-3 rounded-lg inline-block"
              >
                Book Now
              </Link>

            </div>

          ))}

        </div>

      </div>

      {/* WHY CHOOSE US */}

      <div className="px-10 py-24 bg-[#081028]">

        <h2 className="text-5xl font-bold text-center mb-16 text-blue-500">

          Why Choose RAPIFIX?

        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-gray-900 p-10 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300">

            <h3 className="text-3xl mb-4">
              ⚡ Fast Service
            </h3>

            <p className="text-gray-400">
              Quick doorstep repairs by experts.
            </p>

          </div>

          <div className="bg-gray-900 p-10 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300">

            <h3 className="text-3xl mb-4">
              🛠 Trusted Technicians
            </h3>

            <p className="text-gray-400">
              Experienced and verified technicians.
            </p>

          </div>

          <div className="bg-gray-900 p-10 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300">

            <h3 className="text-3xl mb-4">
              💰 Affordable Pricing
            </h3>

            <p className="text-gray-400">
              High quality service at fair prices.
            </p>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="px-10 py-24">

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div>

            <h2 className="text-6xl font-bold text-blue-500">
              500+
            </h2>

            <p className="text-gray-400 mt-4">
              Happy Customers
            </p>

          </div>

          <div>

            <h2 className="text-6xl font-bold text-blue-500">
              1000+
            </h2>

            <p className="text-gray-400 mt-4">
              Repairs Completed
            </p>

          </div>

          <div>

            <h2 className="text-6xl font-bold text-blue-500">
              50+
            </h2>

            <p className="text-gray-400 mt-4">
              Expert Technicians
            </p>

          </div>

          <div>

            <h2 className="text-6xl font-bold text-blue-500">
              24/7
            </h2>

            <p className="text-gray-400 mt-4">
              Customer Support
            </p>

          </div>

        </div>

      </div>

      {/* TESTIMONIALS */}

      <div className="px-10 py-24 bg-[#081028]">

        <h2 className="text-5xl font-bold text-center mb-16 text-blue-500">

          Customer Reviews

        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-900 p-8 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300">

            <p className="text-gray-400 mb-6">

              "Amazing service and fast repair!"

            </p>

            <h3 className="text-blue-500 font-semibold">
              — Rahul
            </h3>

          </div>

          <div className="bg-gray-900 p-8 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300">

            <p className="text-gray-400 mb-6">

              "Professional technicians and affordable."

            </p>

            <h3 className="text-blue-500 font-semibold">
              — Sneha
            </h3>

          </div>

          <div className="bg-gray-900 p-8 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300">

            <p className="text-gray-400 mb-6">

              "Highly recommended for appliance repair."

            </p>

            <h3 className="text-blue-500 font-semibold">
              — Arjun
            </h3>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Home;