const ShippingDetails = require("../models/ShippingDetails");

const createShippingDetails = async (req, res) => {
  try {
    const { address, city, pincode, purchaseId } = req.body;
    const shippingDetails = new ShippingDetails({
      address,
      city,
      pincode,
      purchaseId: purchaseId,
    });
    await shippingDetails.save();
    res.status(201).json(shippingDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllShippingDetails = async (req, res) => {
  try {
    const shippingDetails = await ShippingDetails.find();
    res.json(shippingDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateShippingDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { address, city, pincode, purchaseId } = req.body;
    const updatedShippingDetails = await ShippingDetails.findByIdAndUpdate(
      id,
      { address, city, pincode, purchaseId },
      { new: true }
    );
    if (!updatedShippingDetails) {
      return res.status(404).json({ message: "Shipping details not found" });
    }
    res.json(updatedShippingDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteShippingDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedShippingDetails = await ShippingDetails.findByIdAndDelete(id);
    if (!deletedShippingDetails) {
      return res.status(404).json({ message: "Shipping details not found" });
    }
    res.json({ message: "Shipping details deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createShippingDetails,
  getAllShippingDetails,
  updateShippingDetails,
  deleteShippingDetails,
};
