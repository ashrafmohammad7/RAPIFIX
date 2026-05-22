const Booking = require("../models/Booking");


// CREATE BOOKING
const createBooking = async (req, res) => {

  try {

    const {
      service,
      address,
      city,
      date,
    } = req.body;

    const booking = await Booking.create({
      service,
      address,
      city,
      date,
    });

    res.status(201).json({
      message: "Booking Created Successfully",
      booking,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// GET ALL BOOKINGS
const getBookings = async (req, res) => {

  try {

    const bookings =
      await Booking.find();

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// EXPORTS
module.exports = {
  createBooking,
  getBookings,
};