const CustomerModel = require("../models/Customer");
const PurchaseOrder = require("../models/PurchaseOrder");
const ShippingDetails = require("../models/ShippingDetails");

const getDashboardData = async (req, res) => {
  try {
    // Fetch customers, orders, and shipping details
    const customers = await CustomerModel.find();
    const orders = await PurchaseOrder.find();
    const shippingDetails = await ShippingDetails.find();

    // Prepare dashboard data
    const dashboardData = {
      customers,
      orders,
      shippingDetails,
    };

    // Send response
    res.json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboardData };
