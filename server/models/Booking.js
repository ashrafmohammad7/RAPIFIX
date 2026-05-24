const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(

  {

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    service: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    status: {
      type: String,

      enum: [
        "Pending",
        "Accepted",
        "Completed",
        "Cancelled",
      ],

      default: "Pending",
    },

  },

  {
    timestamps: true,
  }

);

module.exports =
  mongoose.model(
    "Booking",
    bookingSchema
  );