const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authMiddleware = require("./middleware/auth");
const errorHandler = require("./middleware/error");

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/customers", require("./routes/customers"));
app.use("/api/purchase-orders", require("./routes/orders"));
app.use("/api/shipping-details", require("./routes/shipping"));
app.use("/api/auth", require("./routes/auth"));
app.use("/", require("./routes/dashboard")); // Dashboard route
// app.use(
//   "/api/customer-order-history",
//   authMiddleware,
//   require("./routes/customerOrderHistory")
// );

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
