import axios from "axios";

const API =
  "http://localhost:5000/api/bookings";


// CREATE BOOKING
export const createBooking =
  async (bookingData) => {

    const response =
      await axios.post(

        `${API}/create`,

        bookingData,

        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`,
          },
        }

      );

    return response.data;
};


// GET USER BOOKINGS
export const getMyBookings =
  async () => {

    const response =
      await axios.get(

        `${API}/my-bookings`,

        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`,
          },
        }

      );

    return response.data;
};