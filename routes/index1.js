const express = require("express");
const router = express.Router();
const landingPages1Controller = require("../controllers/landingPages1");

router.get("/", landingPages1Controller.getHomePage);

module.exports = router;
