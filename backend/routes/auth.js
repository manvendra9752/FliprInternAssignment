const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const middleware = require("../middleware/auth");

router.post("/signup", authController.register);
router.post("/login", authController.login);
router.post("/getUserData", middleware, authController.authControl);

module.exports = router;
