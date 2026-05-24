const Booking =
  require("../models/Booking");


// CREATE BOOKING
const createBooking =
  async (req, res) => {

    try {

      const {
        service,
        address,
        city,
        date,
      } = req.body;

      const booking =
        await Booking.create({

          userId: req.user.id,

          service,
          address,
          city,
          date,

        });

      res.status(201).json({

        message:
          "Booking Created Successfully",

        booking,

      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

};


// GET USER BOOKINGS
const getBookings =
  async (req, res) => {

    try {

      const bookings =
        await Booking.find({
          userId: req.user.id,
        });

      res.json(bookings);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

};


// ADMIN GET ALL BOOKINGS
const getAllBookings =
  async (req, res) => {

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


// UPDATE BOOKING STATUS
const updateBookingStatus =
  async (req, res) => {

    try {

      const booking =
        await Booking.findById(
          req.params.id
        );

      if (!booking) {

        return res.status(404).json({
          message:
            "Booking not found",
        });

      }

      booking.status =
        req.body.status;

      await booking.save();

      res.json({
        message:
          "Booking Status Updated",
        booking,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

};

module.exports = {

  createBooking,

  getBookings,

  getAllBookings,

  updateBookingStatus,

};