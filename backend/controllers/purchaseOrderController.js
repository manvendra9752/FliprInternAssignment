const PurchaseOrderModel = require("../models/PurchaseOrder");

const createPurchaseOrder = async (req, res) => {
  try {
    const { productName, quantity, pricing, mrp, customerId } = req.body;
    const purchaseOrder = new PurchaseOrderModel({
      productName,
      quantity,
      pricing,
      mrp,
      customerId: customerId,
    });
    await purchaseOrder.save();
    console.log(purchaseOrder);
    res.status(201).json(purchaseOrder);
    // res.status(201).send({
    //   success: true,
    //   data: purchaseOrder,
    //   message: "Purchase Order added successfully",
    // });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrderModel.find();
    res.json(purchaseOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPurchaseOrder,
  getAllPurchaseOrders,
};
