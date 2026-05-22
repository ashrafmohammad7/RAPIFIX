const Technician =
  require("../models/Technician");

const registerTechnician =
  async (req, res) => {

    try {

      const technician =
        await Technician.create(
          req.body
        );

      res.status(201).json({
        message:
          "Technician Registered",
        technician,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

};

const getTechnicians =
  async (req, res) => {

    try {

      const technicians =
        await Technician.find();

      res.json(technicians);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

};

module.exports = {
  registerTechnician,
  getTechnicians,
};