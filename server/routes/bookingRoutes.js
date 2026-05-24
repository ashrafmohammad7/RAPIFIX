const express =
  require("express");

const router =
  express.Router();

const {

  createBooking,

  getBookings,

  getAllBookings,

  updateBookingStatus,

} = require(
  "../controllers/bookingController"
);

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);


// CREATE BOOKING
router.post(
  "/create",
  protect,
  createBooking
);


// USER BOOKINGS
router.get(
  "/my-bookings",
  protect,
  getBookings
);


// ADMIN BOOKINGS
router.get(
  "/admin",
  getAllBookings
);


// UPDATE STATUS
router.put(
  "/update/:id",
  updateBookingStatus
);

module.exports = router;