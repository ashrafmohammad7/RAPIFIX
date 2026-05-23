const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
} = require("../controllers/bookingController");

const {
  protect,
} = require("../middleware/authMiddleware");

// CREATE BOOKING
router.post(
  "/create",
  protect,
  createBooking
);


// GET BOOKINGS
router.get(
  "/",
  getBookings
);


module.exports = router;