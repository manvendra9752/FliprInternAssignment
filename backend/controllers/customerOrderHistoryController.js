const PurchaseOrder = require("../models/PurchaseOrder");

const getCustomerOrderHistory = async (req, res) => {
  try {
    const { customerId } = req.params;
    const orders = await PurchaseOrder.find({ customerId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCustomerOrderHistory };
