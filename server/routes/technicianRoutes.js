const express =
  require("express");

const router =
  express.Router();

const {
  registerTechnician,
  getTechnicians,
} = require(
  "../controllers/technicianController"
);

router.post(
  "/register",
  registerTechnician
);

router.get(
  "/",
  getTechnicians
);

module.exports = router;