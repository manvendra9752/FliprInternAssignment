const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add more fields as needed
  isAdmin: { type: Boolean, default: true },
});

module.exports = mongoose.model("User", userSchema);
