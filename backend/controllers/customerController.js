const CustomerModel = require("../models/Customer");
const createCustomer = async (req, res) => {
  try {
    const { name, email, mobile, city } = req.body;
    const customer = new CustomerModel({ name, email, mobile, city });
    await customer.save();
    console.log(customer);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const { id } = req.params;
    const customers = await CustomerModel.find({ id });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, mobile, city } = req.body;
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(
      id,
      { name, email, mobile, city },
      { new: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await CustomerModel.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomersByCity = async (req, res) => {
  try {
    const { city } = req.query;
    const customers = await CustomerModel.find({ city });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  getCustomersByCity,
};
