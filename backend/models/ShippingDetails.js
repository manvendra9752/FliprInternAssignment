const mongoose = require("mongoose");

const shippingDetailsSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  purchaseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PurchaseOrder",
    required: true,
  },
});

const ShippingDetails = mongoose.model(
  "ShippingDetails",
  shippingDetailsSchema
);

module.exports = ShippingDetails;
