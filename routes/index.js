const express = require("express");
const router = express.Router();
const landingPagesController = require("../controllers/landingPages");
const submitForm = require("../controllers/submitForm");

router.get("/", landingPagesController.getHomePage);
router.post("/submit-form", submitForm.submitContact);

module.exports = router;
