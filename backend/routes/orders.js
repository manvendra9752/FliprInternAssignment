// const express = require("express");
// const router = express.Router();
// const orderController = require("../controllers/purchaseOrderController");

// router.post("/", orderController.createOrder);
// router.get("/", orderController.getAllOrders);
// router.put("/:id", orderController.updateOrder);
// router.delete("/:id", orderController.deleteOrder);

// module.exports = router;
const express = require("express");
const router = express.Router();
const purchaseOrderController = require("../controllers/purchaseOrderController");

// POST request to create a new Purchase Order
router.post("/add", purchaseOrderController.createPurchaseOrder);

// GET request to retrieve all Purchase Orders
router.get("/", purchaseOrderController.getAllPurchaseOrders);

module.exports = router;
