const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const customerOrderHistoryController = require("../controllers/customerOrderHistoryController");

router.get(
  "/:customerId",
  authMiddleware,
  customerOrderHistoryController.getCustomerOrderHistory
);

module.exports = router;
