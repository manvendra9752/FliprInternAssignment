const express = require("express");
const router = express.Router();
// const authMiddleware = require("../middleware/auth");
const dashboardController = require("../controllers/dashboardController");

router.get("/", dashboardController.getDashboardData);

module.exports = router;
