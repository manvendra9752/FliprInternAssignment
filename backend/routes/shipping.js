const express = require("express");
const router = express.Router();
const shippingController = require("../controllers/shippingController");

router.post("/add", shippingController.createShippingDetails);
router.get("/", shippingController.getAllShippingDetails);
router.put("/:id", shippingController.updateShippingDetails);
router.delete("/:id", shippingController.deleteShippingDetails);

module.exports = router;
