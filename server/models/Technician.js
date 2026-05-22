const mongoose = require("mongoose");

const technicianSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      skill: {
        type: String,
        required: true,
      },

      experience: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

module.exports =
  mongoose.model(
    "Technician",
    technicianSchema
  );